import React, { Component } from 'react'
import ReactModal from 'react-modal'
import RevealAnimation from './reveal-animation'

const customStyles = {
    content: {
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%',
        background: '#00000000',
        border: '0px'
    },
    overlay: {
        background: '#00000080',
        zIndex: '1000'
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
    this.setState({ 
        isModalOpen: true
     }, () => {
         this.windowOffset = window.scrollY
         document.body.setAttribute('style', `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0;`)
     })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({
        isModalOpen: false
    }, () => {
        document.body.setAttribute('style', '')
        window.scrollTo(0, this.windowOffset)
    })
  }

  render() {
    return (
        <div>
            <div>
                <button className="naked" onClick={this.handleModalOpen}>
                    <span>Further Information</span>
                </button>
            </div>
            <ReactModal isOpen={this.state.isModalOpen} onRequestClose={this.handleModalClose} contentLabel="Example Modal In Gatsby" style={customStyles}>
                <div className="justify-content-center">
                    <div className="card main-box main-color-surface">
                        <div className="row align-items-center justify-content-center g-0">
                            <div className="col-md-auto order-md-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-auto">
                                            <div className="d-inline-block">
                                                <RevealAnimation animationClass="main-reveal-text">
                                                    <h2 className="prim-color">
                                                        Particle Simulator
                                                    </h2>
                                                </RevealAnimation>
                                            </div>
                                        </div>
                                        <div id="modal-exit" className='col'>
                                            <button className="btn naked large" onClick={this.handleModalClose}>
                                                <span className="h3">&times;</span>
                                            </button>
                                        </div>
                                    </div>
                                    <RevealAnimation animationClass="main-fade-in-animation">
                                        <span>v1.2.2</span>
                                        <p className="card-text"><strong>Description:</strong> A physics simulator built using WebGL and Javascript. Essentially a recreation of a previous group project (CANG Physics Engine). Except this time I had some more experience and greater creative control.</p>
                                        <p className="card-text"><strong>Source Code:</strong> The source code for this project is available <a href="https://github.com/FashionablyNate/Particle-Simulator">here</a>. It is available under the MIT license.</p>
                                        <p className="card-text"><strong>Inspiration:</strong> This project was heavily inspired by Powder Game, created by ha55ii, which you can play <a href="https://dan-ball.jp/en/javagame/dust/">here</a>.</p>
                                        <p className="card-text"><strong>Shortcuts:</strong>
                                            <p>
                                                <strong>Q</strong> - Sand<br/>
                                                <strong>W</strong> - Water<br/>
                                                <strong>E</strong> - Lava<br/>
                                                <strong>R</strong> - Seed<br/>
                                                <strong>A</strong> - Steam<br/>
                                                <strong>S</strong> - Stone<br/>
                                                <strong>D</strong> - Border<br/>
                                                <strong>F</strong> - Fire<br/>
                                                <strong>X</strong> - Eraser<br/>
                                                <strong>1</strong> - Brush-Decrease<br/>
                                                <strong>2</strong> - Brush-Increase<br/>
                                            </p>
                                        </p>
                                        <p className="h5 card-title">
                                            <span className='prim-color'>Changelog</span>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.2.2</strong>
                                            <ul>
                                                <li>Added seed</li>
                                                <li>Added grass</li>
                                                <li>Added fire</li>
                                                <li>Added flammability</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.2.1</strong>
                                            <ul>
                                                <li>Mobile friendly</li>
                                            </ul>
                                        </p>
                                        <p className="card-text">
                                            <strong>v1.2.0</strong>
                                            <ul>
                                                <li>Added eraser</li>
                                                <li>Added brush-size</li>
                                                <li>Added pointer</li>
                                                <li>Added density</li>
                                                <li>Border is now a drawable type</li>
                                            </ul>
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
