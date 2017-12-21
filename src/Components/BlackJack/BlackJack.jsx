import React from 'react';
import { Button, MediaBox, Col, Row } from 'react-materialize';

const BlackJack = (props) => {
    return (
        <div>
            <Row>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/Ui451ZS.jpg' caption='BlackJack' width='250' />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <p>A popular gambling card game where the player's objective is to beat the dealer without going over 21. If a player gets BlackJack, 21, in the first two cards, they win extra. Bet big to win big!</p>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <Button node="a" href="https://cdecamp77.github.io/Black_Jack/">BlackJack Deployed</Button>
                </Col>
                <Col s={6}>
		            <Button node="a" href="https://github.com/cdecamp77/Black_Jack">BlackJack GitHub</Button>
                </Col>
            </Row>
        </div>
    )
}

export default BlackJack;