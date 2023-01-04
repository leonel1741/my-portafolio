import React from 'react';
import '../styles/skills.css';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import javascriptLogo from '../assets/javascript-logo.png';
import gitLogo from '../assets/git-logo.png';
import reactLogo from '../assets/react-logo.png';
import reduxLogo from '../assets/redux-logo.png';
import nodeLogo from '../assets/node-logo.png';
import postgresqlLogo from '../assets/postgresql-logo.png';
import sequelizeLogo from '../assets/sequelize-logo.png';
import coverVideo from '../assets/videos/cover-video-aboutme.mp4';

const Skills = ( { scrollHeight, id } ) => {

    const imagesSkills = [
        htmlLogo,
        cssLogo,
        javascriptLogo,
        gitLogo,
        reactLogo,
        reduxLogo,
        nodeLogo,
        postgresqlLogo,
        sequelizeLogo,
    ]

    return (
        <div className='skills-container' id={id}>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1 className={`h1 ${scrollHeight > 800 ? 'title-is-visible' : ''}`}>Skills</h1>
            <ul className={`skills-section ${scrollHeight > 800 ? 'skills-visible' : ''}`}>
                {
                    imagesSkills.map(image => (
                        <li key={image} className='image-section' >
                            <img className='image-item' width="100%" height="100%" src={image} alt="" />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Skills;