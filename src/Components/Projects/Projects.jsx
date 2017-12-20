import React from 'react';
import './Projects.css';
import {Row, Col, Card, CardTitle, Modal, Button} from 'react-materialize';
import Aberrant from '../Aberrant/Aberrant';
import BlackJack from '../BlackJack/BlackJack';
import LetsFly from '../LetsFly/LetsFly';
import Drawify from '../Drawify/Drawify';

const Projects = (props) => {
    return(
        <div>
            <Row>
                <Col s={3} className="BlackJack">
                    <Card   className='Blackjack'
                            header={<CardTitle image='https://i.imgur.com/Ui451ZS.jpg'>BlackJack</CardTitle>}
                            actions={[<Modal header="BlackJack" trigger={<Button>Details</Button>}><BlackJack /></Modal>]}>
                    </Card>
                </Col>
                <Col s={3} className="AberrantBarter">
                    <Card   className='Aberrant'
                            header={<CardTitle image='https://i.imgur.com/ieZCxSL.png'>Aberrant Barter</CardTitle>}
                            actions={[<Modal header="Aberrant Barter" trigger={<Button>Details</Button>}><Aberrant /></Modal>]}>
                    </Card>
                </Col>
                <Col s={3} className="LetsFly">
                    <Card   className='LetsFly'
                            header={<CardTitle image='https://i.imgur.com/T28IOge.png'>Let's Fly</CardTitle>}
                            actions={[<Modal header="Let's Fly" trigger={<Button>Details</Button>}><LetsFly /></Modal>]}>
                    </Card>
                </Col>
                <Col s={3} className="Drawify">
                    <Card   className='Aberrant'
                            header={<CardTitle image='https://i.imgur.com/eotsaQx.png'>Drawify</CardTitle>}
                            actions={[<Modal header="Drawify" trigger={<Button>Details</Button>}><Drawify /></Modal>]}>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Projects;