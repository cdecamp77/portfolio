import React from 'react';
import {Row, Col, MediaBox, Button} from 'react-materialize';

const Drawify = (props) => {
    return (
        <div>
            <Row>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/eotsaQx.png' caption='Drawify' width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/0ywuGyi.png' caption='Drawify' width='250' />
                </Col>
                <Col s={4}>
                    <MediaBox src='https://i.imgur.com/ksBFHZG.png' caption='Drawify' width='250' />
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <p>Drawify is a simple web application where a logged in user uses the web camera on their computer to snap a photo and then have the ability to draw over it!</p>
                </Col>
            </Row>
            <Row>
                <Col s={6}>
                    <Button href="https://drawify.herokuapp.com/">Drawify Deployed</Button>
                </Col>
                <Col s={6}>
		            <Button href="https://github.com/cdecamp77/drawify">Drawify GitHub</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Drawify;