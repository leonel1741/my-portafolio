import React, { useEffect, useRef, useState } from 'react';
import '../styles/aboutMe.css';
import imageDecoration from '../assets/logo-about-me.png';

const AboutMe = ({ scrollHeight, id }) => {
    return (
        <div className='about-me-container' id={id}>
            {/* <video className='video' src={video} autoPlay loop muted /> */}
            <h1 className={`h1 ${scrollHeight > 150 ? 'title-visible' : ''}`}>About Me</h1>
            <div className='about-me-section'>
                <div className='imageDecoration'>
                    <img src={imageDecoration} alt="" />
                </div>
                <div className={`about-me-item ${scrollHeight > 150 ? 'visible' : ''}`}>
                    <div className='description'>
                        <p>
                            Hi, Soy desarrollador web Full Stack me gusta mucho la programacion tanto la parte del Front End como la del Back End. Soy una persona proactiva, comprometida con el trabajo.
                        </p>
                        <p>
                            Actualmente estudio en el programa Desarrollo Web Full-Stack y Ciencias de la Computacion en Academlo.
                        </p>
                    </div>

                    <ul className='details'>
                        <li className='my-data'>
                            <div className='my-data-item'>
                                <i className="fa-solid fa-cake-candles"></i>
                                <p>Birthday: 29-04-1998</p>
                            </div>
                            <div className='my-data-item'>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Location: La Paz, Bolivia</p>
                            </div>
                            <div className='my-data-item'>
                                <i className="fa-solid fa-phone"></i>
                                <p>Phone: +591 61103110</p>
                            </div>
                        </li>
                        <li className='studies'>
                            <div className='study'>
                                <span>2022-{'(Egresado)'}</span>
                                <br />
                                <p>
                                    Desarrollo Web Full-Stack y Ciencias de la Computacion - Academlo
                                </p>
                            </div>
                            <div className='study'>
                                <span>2017-{'(Cursando)'}</span>
                                <br />
                                <p>
                                    Carrera de Informactica - Universidad Mayor de San Andres - UMSA
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;