import React from 'react';
import {Col, Row } from 'react-materialize';
import './AboutMe.css';

const AboutMe = (props) => {
    return (
        <div>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4 className="quote "><i>My name is Christopher De Camp,</i></h4>
                    <h4 className="quote"><i>and I am a web developer.</i></h4>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="about">
                    <p className="about-me">I make dreams become reality using languages like HTML, CSS, JavaScript, ReactJS, NodeJS, and Ruby on Rails. I recently graduated from General Assembly in Los Angeles and loved everything about it. When I'm not coding my next project you can find me in a kitchen cooking up some awesome eats. Want to work together? I’d love to hear from you.</p>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe;