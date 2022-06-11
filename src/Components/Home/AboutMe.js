import React from 'react';
import About from './About';
import hobby from '../../Images/hobby.png'

const AboutMe = () => {
    return (
        <div>
            <About></About>
            <div className='mb-12'>
            <h1 className="text-white text-5xl text-center mt-12">I am Interest in</h1>
            <img className='mx-auto mt-12 mb-5 rounded' src={hobby} alt="" />
            <p className="text-white text-xl text-justify">I love to talk with people. It makes me happy. I love to talk with unknown people, i think it helps me to find who i am really is. I love traveling too. I have a bike. When i am free from my daily work, i just start the bike, put a gear and become disappear. My another interest is repairing old and disturbed things. It makes me so happy when i repair a old things and it work like new.</p>
            </div>
        </div>
    );
};

export default AboutMe;