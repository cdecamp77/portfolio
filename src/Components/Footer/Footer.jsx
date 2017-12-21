import React from 'react';
import './Footer.css';
import {Col, Row} from 'react-materialize';

const FooterBar = (props) => {
    return (
        <Row>
            <div className="Footer">
                <ul>
                    <Col s={3}>
                        <li>cdecamp77@gmail.com</li>
                    </Col>
                    <Col s={3}>
                        <li><a href="https://github.com/cdecamp77" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </Col>
                    <Col s={3}>
                        <li><a href="https://www.linkedin.com/in/cdecamp77/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </Col>
                    <Col s={3}>
                        <li><a href="./../assets/cdecamp_resume.pdf" download>Resume</a></li>
                    </Col>
                </ul>
            </div>
        </Row>
    );
};

export default FooterBar;