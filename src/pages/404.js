import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from"../components/seo"
import Layout from "../components/layout"

class ErrorPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className="main-page h-100">
                    <Seo title="404 Error" description="GeorgeNotFound, more like PageNotFound haha" />
                    <div className="container-fluid d-flex flex-column main-mh-100">
                        <NavigationSpacer />
                        <div className="container flex-grow-1">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-xl-8">
                                    <h1>404 Error</h1>
                                    <p>Oops, looks like something went wrong.</p>
                                    <p>Possible Reasons:</p>
                                    <ul>
                                        <li>The page doesn't exist.</li>
                                        <li>The wrong URL was entered.</li>
                                    </ul>
                                    <p>Plausible Reasons:</p>
                                    <ul>
                                        <li>I suck at web development.</li>
                                    </ul>
                                    <Link to="/">Go to home page.</Link>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ErrorPage