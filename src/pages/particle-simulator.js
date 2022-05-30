import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Game from "../components/game"
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
                                        <div className="row" align="center">
                                            <div className="col">
                                                <button id="sand-select" className="btn naked large">Sand</button>
                                            </div>
                                            <div className="col">
                                                <button id="water-select" className="btn naked large">Water</button>        
                                            </div>
                                            <div className="col">
                                                <button id="lava-select" className="btn naked large">Lava</button>        
                                            </div>
                                            <div className="col">
                                                <button id="steam-select" className="btn naked large">Steam</button>        
                                            </div>
                                        </div>
                                        <div className="row" align="center">
                                            <div className="col">
                                                <button id="stone-select" className="btn naked large">Stone</button>
                                            </div>
                                            <div className="col">
                                            </div>
                                            <div className="col">
                                            </div>
                                            <div className="col">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-auto">
                                    <p><br/><br/></p>
                                    <div className="main-fade-in-animation-delay-1">
                                        <div className="main-fade-in-animation">
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">Particles:</strong>
                                                    <span id="SelectionDisplay1">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">FPS:</strong>
                                                    <span id="SelectionDisplay2">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">Select:</strong>
                                                    <span id="SelectionDisplay3">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">Speed:</strong>
                                                    <span id="SelectionDisplay4">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">X-Pos:</strong>
                                                    <span id="SelectionDisplay5">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <strong className="prim-color">Y-Pos:</strong>
                                                    <span id="SelectionDisplay6">no script  has run</span>
                                                </div>
                                            </div>
                                            <div className="row">
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