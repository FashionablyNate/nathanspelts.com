import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Game from "../components/game"
import { Helmet } from "react-helmet"
import Modal from "../components/modal"

class ParticleSimulator extends React.Component {
    render() {
        return (
            <Layout>
                <div className="main-page h-100">
                    <Seo title="Particle-Simulator" description="A physics sandbox made using Javascript and WebGL." />
                    <div className="container-fluid d-flex flex-column main-mh-100">
                        <NavigationSpacer />
                        <div className="container flex-grow-1">
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <h1 className="prim-color main-reveal-text-short mt-0">Particle Simulator</h1>
                                    <div id="div1" className="main-fade-in-animation">
                                        <span>v1.0.2</span>
                                        <canvas id="glcanvas" width="600" height="450"/>
                                        <Game />
                                    </div>
                                    <div class="html_button btn-left">
                                        <a id="sand-select" class="btn naked large">Sand</a>
                                        <a id="water-select" class="btn naked large">Water</a>
                                        <a id="lava-select" class="btn naked large">Lava</a>
                                        <a id="steam-select" class="btn naked large">Steam</a>
                                        <a id="stone-select" class="btn naked large">Stone</a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="main-fade-in-animation">
                                        <p><br/><br/></p>
                                        <div>
                                            <strong className="prim-color">Particles:</strong>
                                            <span id="SelectionDisplay1">no script  has run</span>
                                        </div>
                                        <div>
                                            <strong className="prim-color">FPS:</strong>
                                            <span id="SelectionDisplay2">no script  has run</span>
                                        </div>
                                        <div>
                                            <strong className="prim-color">Selection:</strong>
                                            <span id="SelectionDisplay3">no script  has run</span>
                                        </div>
                                        <div>
                                            <strong className="prim-color">Speed:</strong>
                                            <span id="SelectionDisplay4">no script  has run</span>
                                        </div>
                                        <p><strong className="prim-color">Q</strong> for Sand,
                                        <br/><strong className="prim-color">W</strong> for Water, 
                                        <br/><strong className="prim-color">E</strong> for Lava, 
                                        <br/><strong className="prim-color">A</strong> for Steam, 
                                        <br/><strong className="prim-color">S</strong> for Stone
                                        <br/></p>
                                        <Modal />
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

export default ParticleSimulator