import React, { useEffect, useState } from 'react';
import '../styles/presentation.css';
import coverVideo from '../assets/videos/cover-video.mp4';
import logoPersonal from '../assets/logo-personal.png';

const Presentation = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);

    useEffect(() => {
  

      
        const tick = () => {
            const toRotate = [ "FullStack Developer", "FrontEnd Developer", "BackEnd Developer" ];
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(50);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                // setIndex(prevIndex => prevIndex - 1);
                setDelta(1500);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                // setIndex(1);
                setDelta(500);
            } else {
                // setIndex(prevIndex => prevIndex + 1);
                if (updatedText.length === 1){
                    setDelta(100);
                }
            }
        }

        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta, isDeleting, loopNum])

    return (
        <div className='presentation-container' >
            <div className="overlay"></div>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <div className='logo'>
                <img src={logoPersonal} alt="" />
            </div>
            <div className='presentation-item'>
                <div><h1>Hi!</h1></div>
                <div><h2>I'm Leonel</h2></div>
                <div><h3>{text}</h3></div>
            </div>
        </div>
    );
};

export default Presentation;