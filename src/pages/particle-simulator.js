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
                            <div className="row h-50 justify-content-center">
                                <div className="col-lg-auto">
                                    <h1 className="prim-color main-reveal-text-short mt-0">Particle Simulator</h1>
                                    <div id="div1" className="main-fade-in-animation">
                                        <canvas id="glcanvas" width="600" height="450"/>
                                        <Game />
                                        <div class="row" align="center">
                                            <div class="col">
                                                <a id="sand-select" class="btn naked large">Sand</a>
                                            </div>
                                            <div class="col">
                                                <a id="water-select" class="btn naked large">Water</a>        
                                            </div>
                                            <div class="col">
                                                <a id="lava-select" class="btn naked large">Lava</a>        
                                            </div>
                                            <div class="col">
                                                <a id="steam-select" class="btn naked large">Steam</a>        
                                            </div>
                                        </div>
                                        <div class="row" align="center">
                                            <div class="col">
                                                <a id="stone-select" class="btn naked large">Stone</a>
                                            </div>
                                            <div class="col">
                                            </div>
                                            <div class="col">
                                            </div>
                                            <div class="col">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto">
                                    <p><br/><br/></p>
                                    <div className="main-fade-in-animation-delay-1">
                                        <div className="main-fade-in-animation">
                                            <div class="row">
                                                <div>
                                                    <strong className="prim-color">Particles:</strong>
                                                    <span id="SelectionDisplay1">no script  has run</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div>
                                                    <strong className="prim-color">FPS:</strong>
                                                    <span id="SelectionDisplay2">no script  has run</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div>
                                                    <strong className="prim-color">Select:</strong>
                                                    <span id="SelectionDisplay3">no script  has run</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div>
                                                    <strong className="prim-color">Speed:</strong>
                                                    <span id="SelectionDisplay4">no script  has run</span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div>
                                                    <Modal />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
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