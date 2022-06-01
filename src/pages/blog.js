import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <div className="main-page h-100">
      <Seo title="All posts" />
      <div className="container-fluid d-flex flex-column main-mh-100">
        <NavigationSpacer />
        <div className="container flex-grow-1">
          <div className="row justify-content-center">
            <div className="col-md-10 col-xl-8">
              <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                  const title = post.frontmatter.title || post.fields.slug

                  return (
                    <li key={post.fields.slug}>
                      <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header>
                          <h3 className="main-reveal-text-short d-block">
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h3>
                          <small className="main-fade-in-animation">{post.frontmatter.date}</small>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description" className="main-fade-in-animation"
                          />
                        </section>
                        <hr />
                      </article>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`