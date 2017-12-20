import React from 'react';
import './Profile.css';
import {Row, Col} from 'react-materialize';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import AboutMe from '../AboutMe/AboutMe';

const Profile = (props) => {
    return (
        <div>
            <Row>
                <Col s={4} className="ProfilePicture">
                    <ProfilePicture />
                </Col>
                <Col s={8} className="AboutMe">
                    <AboutMe />
                </Col>
            </Row>
        </div>
    );
}

export default Profile;