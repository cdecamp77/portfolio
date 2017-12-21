import React from 'react';
import './Landing.css';
import Profile from '../../Components/Profile/Profile';
import Projects from '../../Components/Projects/Projects';
import Footer from '../../Components/Footer/Footer';


const Landing = (props) => {
    return (
        <div>
            <Profile />
            <Projects />
            <Footer />
        </div>
    );
};

export default Landing;