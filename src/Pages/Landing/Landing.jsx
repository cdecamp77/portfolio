import React from 'react';
import './Landing.css';
import Profile from '../../Components/Profile/Profile';
import Projects from '../../Components/Projects/Projects';


const Landing = (props) => {
    return (
        <div>
            <Profile />
            <Projects />
        </div>
    );
};

export default Landing;