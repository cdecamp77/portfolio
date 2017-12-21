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
                        </div>
                        <div className="card-title">
                            <p>BlackJack</p>
                        </div>
                        <div className="card-action">
                            <Modal header="BlackJack" trigger={<Button className="btn">Details</Button>}><BlackJack /></Modal>
                        </div>
                    </div>
                </Col>
                <Col s={3} className="AberrantBarter">
                    <div className="card hoverable small card-small">
                            <div className="card-image">
                                <img alt="Aberrant" src="https://i.imgur.com/ieZCxSL.png" />
                            </div>
                            <div className="card-title">
                                <p>Aberrant Barter</p>
                            </div>
                            <div className="card-action">
                                <Modal header="Aberrant Barter" trigger={<Button className="btn">Details</Button>}><Aberrant /></Modal>
                            </div>
                        </div>
                </Col>
                <Col s={3} className="LetsFly">
                    <div className="card hoverable small card-small">
                        <div className="card-image">
                            <img alt="LetsFly" src="https://i.imgur.com/T28IOge.png" />
                        </div>
                        <div className="card-title">
                            <p>Let's Fly</p>
                        </div>
                        <div className="card-action">
                            <Modal header="Let's Fly" trigger={<Button className="btn">Details</Button>}><LetsFly /></Modal>
                        </div>
                    </div>
                </Col>
                <Col s={3} className="Drawify">
                    <div className="card hoverable small card-small">
                        <div className="card-image">
                            <img alt="Drawify" src="https://i.imgur.com/eotsaQx.png" />
                        </div>
                        <div className="card-title">
                            <p>Drawify</p>
                        </div>
                        <div className="card-action">
                            <Modal header="Drawify" trigger={<Button className="btn">Details</Button>}><Drawify /></Modal>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;