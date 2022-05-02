import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"
import Layout from "../components/layout"

class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <div className="main-page h-100">
                    <Seo title="Contact" description="Find out how to contact WhiteHoodHacker and how to do it securely." />
                    <div className="container-fluid d-flex flex-column main-mh-100">
                        <NavigationSpacer />
                        <div className="container flex-grow-1">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-xl-8">
                                    <h1 className="prim-color main-reveal-text-short mt-0">Contact</h1>
                                    <div className="main-fade-in-animation">
                                        <p>You can send an email to <a href="mailto: nate@nathanspelts.com">nate@nathanspelts.com</a>.</p>
                                        <p>You can also click the social icons at the bottom of the page for my <a href="https://gitlab.com/nspelts">GitLab</a>, <a href="https://github.com/FashionablyNate">GitHub</a>, and <a href="https://www.linkedin.com/in/nathanspelts/">LinkedIn</a> respectively.</p>
                                        <p>You can download a copy of my resume by clicking <a href="/Resume.pdf" download>here</a>.</p>
                                    </div>
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

export default Contact