import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import NavigationSpacer from "../components/navigation-spacer"
import RevealAnimation from "../components/reveal-animation"
import Footer from "../components/footer"
import LatestPost from "../components/latest-post"
import Seo from "../components/seo"
import { Link } from "gatsby"

class Home extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Nathan Spelts' Portfolio Site" description="I'm a 23 year old computer science student at Washington State University. In my free time, I do coding puzzles and mess around with graphics programming."
                    src="../img/Spelts_logo.png" width="300" height="300" />
                <section id="intro" className="container-fluid main-mh-100 mb-5">
                    <NavigationSpacer />
                    <div className="container h-100">
                        <div className="row h-50 justify-content-center">
                            <div className="col-lg-7 col-md-6">
                                <h1 className="prim-color main-reveal-text-short">Hi, I'm Nathan.<br />I'm a software developer.</h1>
                                <div className="main-fade-in-animation-delay-1">
                                    <p>I'm a 23 year old computer science student at Washington State University.</p>
                                    <p>In my free time, I do coding puzzles and mess around with graphics programming.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-7 col-8">
                                <div className="main-fade-in-animation-delay-1">
                                  <StaticImage width={300} height={300} quality={95} formats={["auto", "webp", "avif"]} className="main-fit-element main-circle" src="../img/portrait512.jpg" alt="Portrait" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="main-fade-in-animation-delay-2">
                                    <LatestPost />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="experiences" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1 className="prim-color">Programming Project Experience</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7 order-md-2">
                                                <div className="card-body">
                                                    <p className="h5 card-title">Particle-Simulator</p>
                                                    <p className="card-text">A web game built using WebGL and Javascript. Essentially a recreation of a previous group project (CANG Physics Engine). Except this time I had some more experience and greater creative control.</p>
                                                    <p className="card-text m-0"><a aria-label="Webpage for Particle-Simulator" target="_blank" rel="noopener noreferrer" href="/particle-simulator">See webpage</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 order-md-1">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-start-lg" src="../img/particle-simulator.png" alt="a screenshot my particle simulator game." />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">CANG Physics Engine</p>
                                                    <p className="card-text m-0">A physics simulator written in C++ using OpenGL and GLFW. My role in the group was writing the graphics code, most of the collision code, and the compound state logic.</p>
                                                    <p className="card-text m-0"><a aria-label="CANG Physics Engine Repository" target="_blank" rel="noopener noreferrer" href="https://github.com/Cyrus-Santiago/C.A.N.G.-Phys-Sim">See repository</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <StaticImage width={1024} height={768} formats={["auto", "webp", "avif"]} className="img-fluid main-rounded-end-lg" src="../img/CANG.png" alt="CANG Physics Simulator Screenshot" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7 order-md-2">
                                                <div className="card-body">
                                                    <p className="h5 card-title">Django Blog</p>
                                                    <p className="card-text">A blog site built using the Django web framework. Complete with account login/registration, post creation/editing/deletion, and admin backend.</p>
                                                    <p className="card-text m-0"><a aria-label="Django Blog Website" target="_blank" rel="noopener noreferrer" href="https://blog.nathanspelts.com/">See website</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5 order-md-1">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-start-lg" src="../img/django.png" alt="a screenshot of the Django blog site." />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">Moonlight Sidescroller Game</p>
                                                    <p className="card-text">A 2D sidescrolling game built using the HaxelFlixel engine. This is where I really learned about game engines, and was a stepping stone to creating CANG Physics Engine.</p>
                                                    <p className="card-text m-0"><a aria-label="moonlight repository" target="_blank" rel="noopener noreferrer" href="https://github.com/FashionablyNate/Moonlight">See repository</a></p>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <StaticImage width={1024} height={768} className="img-fluid main-rounded-end-lg" src="../img/moonlight.png" alt="Screenshot of moonlight" />
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1 className="prim-color">Academics</h1>
                                    </RevealAnimation>
                                </div>
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <ul>
                                        <li>Associates of Science with Honors</li>
                                        <li>3.8 GPA</li>
                                        <li>Senior at Washington State University Vancouver</li>
                                    </ul>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="subscribe" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <Link className="nav-link" to="/contact">Interested in Contacting me?</Link>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              <Footer />
            </div>
        )
    }
}

export default Home
