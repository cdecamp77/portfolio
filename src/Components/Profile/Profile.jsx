import React from 'react';
import './Profile.css';
import {Row, Col} from 'react-materialize';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import AboutMe from '../AboutMe/AboutMe';

const Profile = (props) => {
    return (
        <div className="background-img">
            <Row>
                <Col s={3} className="ProfilePicture">
                    <ProfilePicture />
                </Col>
                <Col s={9} className="AboutMe">
                    <AboutMe />
                </Col>
            </Row>
        </div>
    );
}

export default Profile;