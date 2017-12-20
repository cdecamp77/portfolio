import React from 'react';
import {Row, Col, MediaBox, Button} from 'react-materialize';

const LetsFly = (props) => {
    return (
        <div>
            <Row>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/T28IOge.png' caption="Home Page" width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/fmKPSdB.png' caption="Inspiration Page" width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/lOPrz9y.png' caption="Results Page" width='250' />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <p>Need to book a flight? Use Let's Fly! This easy to use app allows travelers to book flights on the fly! Feeling spontaneous? Lets Fly can also choose a random destination for you, and if it's not to your liking feel free to spin again for a new destination.</p>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <Button href="https://lets--fly.herokuapp.com/">Let's Fly Deployed</Button>
                </Col>
                <Col s={6}>
		            <Button href="https://github.com/cdecamp77/letsFly/tree/decamp">Let's Fly GitHub</Button>
                </Col>
            </Row>
        </div>
    )
}

export default LetsFly;