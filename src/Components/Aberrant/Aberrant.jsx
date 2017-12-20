import React from 'react';
import { Button, MediaBox, Row, Col } from 'react-materialize';

const Aberrant = (props) => {
    return (
        <div>
            <Row>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/ieZCxSL.png' caption='Aberrant Barter' width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/iksPeq6.png' caption='Aberrant Barter' width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/OIuZ9Vy.png' caption='Aberrant Barter' width='250' />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <p>Aberrant Barter is an app where users can create a profile, and post items that they would be willing to trade. Other users will then post an offer with a different item that they want to trade for the item you have posted. Users are able to accept an offer that a user has posted and close out the trade. Creative and unusual trades is the premise of the app, so get Aberrant and start making some trades!</p>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <Button href="https://aberrant-barter.herokuapp.com/">Aberrant Barter Deployed</Button>
                </Col>
                <Col s={6}>
		            <Button href="https://github.com/cdecamp77/Aberrant">Aberrant Barter GitHub</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Aberrant;