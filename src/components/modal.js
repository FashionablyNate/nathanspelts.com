import React, { Component } from 'react'
import ReactModal from 'react-modal'
import RevealAnimation from './reveal-animation'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const customStyles = {
    content: {
        padding: '0',
        background: '#00000000',
        border: '0px'
    },
    overlay: {
        background: '#00000080'
    },
};

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
        <div>
            <div id="main">
                <button class="btn naked large" onClick={this.handleModalOpen}>
                    <span>Info</span>
                </button>
            </div>
            <ReactModal isOpen={this.state.isModalOpen} onRequestClose={this.handleModalClose} contentLabel="Example Modal In Gatsby" style={customStyles}>
                <div className="justify-content-center">
                    <div className="card main-box main-color-surface">
                        <div className="row align-items-center justify-content-center g-0">
                            <div className="col-md-12 order-md-3">
                                <div className="card-body">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <p className="h5 card-title">
                                            <span className="prim-color">Particle-Simulator</span>
                                            <button class="btn naked large float-right" onClick={this.handleModalClose}>
                                                <span className="h3">&times;</span>
                                            </button>
                                        </p>
                                    </RevealAnimation>
                                    <RevealAnimation animationClass="main-fade-in-animation">
                                        <p className="card-text"><strong>Description:</strong> A physics simulator built using WebGL and Javascript. Essentially a recreation of a previous group project (CANG Physics Engine). Except this time I had some more experience and greater creative control.</p>
                                        <p className="card-text"><strong>Source Code:</strong> The source code for this project is available <a href="https://github.com/FashionablyNate/Particle-Simulator">here</a>. It is available under the MIT license.</p>
                                        <p className="card-text"><strong>Inspiration:</strong> This project was heavily inspired by Powder Game, created by ha55ii, which you can play <a href="https://dan-ball.jp/en/javagame/dust/">here</a>.</p>
                                        <p className="h5 card-title">
                                            <span className='prim-color'>Changelog</span>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.1.0</strong>
                                            <ul>
                                                <li>Added lava</li>
                                                <li>Added stone</li>
                                                <li>Added steam</li>
                                                <li>Fixed teleporting liquid</li>
                                                <li>Added buttons</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.0.3</strong>
                                            <ul>
                                                <li>Speed now decreases at lower framerates</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.0.2</strong>
                                            <ul>
                                                <li>Performance enhancements</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.0.1</strong>
                                            <ul>
                                                <li>Speed now increases at lower framerates</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.0.0</strong>
                                            <ul>
                                                <li>Added Particle</li>
                                                <li>Added Water</li>
                                            </ul>
                                        </p>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
  }
}

export default Modal