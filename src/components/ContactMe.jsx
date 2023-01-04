import React from 'react';
import '../styles/contactMe.css';
import emailjs from '@emailjs/browser';
import cv from '../assets/pdf/CV.pdf';

const ContactMe = ({ scrollHeight, id }) => {

    const submit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_98pl12b', 'template_fbhiohj', event.target, '9xW513JoPdnwhdE14')
            .then(res => {
                console.log(res);
                alert("Message send successfully");
            })
            .catch(error => console.log(error));
        form.reset();
    }

    return (
        <div className={`contact-me-container ${scrollHeight > 2500 ? 'contact-me-container-visible' : ''}`} id={id}>
            <div className='overlay'></div>
            <h1>Contact Me</h1>
            <form className='form-container'id='form' onSubmit={submit}>
                <div className='input-section'>
                    <label htmlFor="name">Name / Company</label>
                    <input
                        type="text"
                        id='name'
                        name='user_name'
                        placeholder='Name'
                    />
                </div>
                <div className='input-section'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id='email'
                        name='user_email'
                        placeholder='name@example.com'
                    />
                </div>
                <div className='input-section'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        id='message'
                        rows="8"
                        name='user_message'
                        placeholder='Message'
                    ></textarea>
                </div>
                <button >Send</button>
            </form>
            <ul className='contact-section'>
                <li className='contact-item'>
                    <a href={cv} target='_blank'>CV</a>
                </li>

                <li className='contact-item'>
                    <a href="" target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>

                <li className='contact-item'>
                    <a href="https://github.com/leonel1741" target='_blank'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactMe;