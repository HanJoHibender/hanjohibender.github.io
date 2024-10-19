import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>About Hibender.io</h1>
            <p>Welcome to Hibender.io, your go-to platform for [describe what Hibender.io does].</p>
            <h2>Our Mission</h2>
            <p>At Hibender.io, our mission is to [state the mission of Hibender.io].</p>
            <h2>Our Team</h2>
            <p>We are a team of dedicated professionals passionate about [describe the team's passion or expertise].</p>
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us at <a href="mailto:contact@hibender.io">contact@hibender.io</a>.</p>
        </div>
    );
};

export default About;