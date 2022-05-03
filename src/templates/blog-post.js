import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import PostSidebar from "../components/post-sidebar"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const postUrl = data.site.siteMetadata?.siteUrl + post.fields.slug
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout>
      <div className="main-page h-100">
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.image}
        />
        <section id="top" className="container-fluid d-flex flex-column main-mh-100">
          <NavigationSpacer />
          <div className="container flex-grow-1">
            <div className="row justify-content-center">
              <div className="d-none d-xl-block col-xl-2">
                <PostSidebar shareUrl={postUrl} />
              </div>
              <div className="col-md-10 col-xl-8">
                <p className="m-0 main-fade-in-animation">
                  <Link to="/blog"><strong>← All Posts</strong></Link>
                </p>
                <article id="post-content" itemScope itemType="http://schema.org/Article">
                  <header>
                    <h1 className="main-reveal-text-short" itemProp="headline">{post.frontmatter.title}</h1>
                    <p className="main-fade-in-animation d-inline-block">{post.frontmatter.date}</p>
                  </header>
                    <section className="main-fade-in-animation"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                      itemProp="articleBody"
                    />
                    <hr />
                </article>
              </div>
            <div className="d-none d-xl-block col-xl-2"></div>
          </div>
          <nav className="mb-5">
            <div className="row justify-content-center">
              <div className="col-6 col-md-5 col-xl-4 text-start">
                {next && (
                  <React.Fragment>
                    <p className="m-0">← Newer</p>
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title}
                    </Link>
                  </React.Fragment>
                )}
              </div>
                <div className="col-6 col-md-5 col-xl-4 text-end">
                  {previous && (
                    <React.Fragment>
                      <p className="m-0">Older →</p>
                      <Link to={previous.fields.slug} rel="prev">
                        {previous.frontmatter.title}
                      </Link>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </nav>
          </div>
          <Footer />
        </section>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
