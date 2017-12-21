import React from 'react';
import './Projects.css';
import {Row, Col, Modal, Button} from 'react-materialize';
import Aberrant from '../Aberrant/Aberrant';
import BlackJack from '../BlackJack/BlackJack';
import LetsFly from '../LetsFly/LetsFly';
import Drawify from '../Drawify/Drawify';

const Projects = (props) => {
    return(
        <div>
            <Row>
                <Col s={3} className="BlackJack">
                    <div className="card hoverable small card-small">
                        <div className="card-image">
                            <img alt="BlackJack" src="https://i.imgur.com/Ui451ZS.jpg" />
                            <span className="card-title">BlackJack</span>
                        </div>
                        <div className="card-action">
                            <Modal header="BlackJack" trigger={<Button>Details</Button>}><BlackJack /></Modal>
                        </div>
                    </div>
                </Col>
                <Col s={3} className="AberrantBarter">
                    <div className="card hoverable small card-small">
                            <div className="card-image">
                                <img alt="Aberrant" src="https://i.imgur.com/ieZCxSL.png" />
                                <span className="card-title">Aberrant Barter</span>
                            </div>
                            <div className="card-content">
                            </div>
                            <div className="card-action">
                                <Modal header="Aberrant Barter" trigger={<Button>Details</Button>}><Aberrant /></Modal>
                            </div>
                        </div>
                </Col>
                <Col s={3} className="LetsFly">
                    <div className="card hoverable small card-small">
                        <div className="card-image">
                            <img alt="LetsFly" src="https://i.imgur.com/T28IOge.png" />
                            <span className="card-title">Let's Fly</span>
                        </div>
                        <div className="card-action">
                            <Modal header="Let's Fly" trigger={<Button>Details</Button>}><LetsFly /></Modal>
                        </div>
                    </div>
                </Col>
                <Col s={3} className="Drawify">
                    <div className="card hoverable small card-small">
                        <div className="card-image">
                            <img alt="Drawify" src="https://i.imgur.com/eotsaQx.png" />
                            <span className="card-title">Drawify</span>
                        </div>
                        <div className="card-action">
                            <Modal header="Drawify" trigger={<Button>Details</Button>}><Drawify /></Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;