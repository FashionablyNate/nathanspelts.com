import React from "react"

import Footer from "../components/footer"
import NavigationSpacer from "../components/navigation-spacer"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Game from "../components/game"

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
                                <div className="col-md-10 col-xl-8">
                                    <h1 className="prim-color main-reveal-text-short mt-0">Particle Simulator</h1>
                                    <div id="div1" className="main-fade-in-animation">
                                        <canvas id="glcanvas" width="600" height="450"/>
                                        <div id="SelectionDisplay1">no script  has run</div>
                                        <div id="SelectionDisplay2">no script  has run</div>
                                        <p>'Q' for Particle, 'W' for Water, 'E' for Lava <br/>
                                        'A' for Steam, 'S' for Stone</p>
                                        <Game />
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