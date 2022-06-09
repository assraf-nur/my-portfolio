import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Images/profile.png'
import html from '../../Images/html.png'
import boot from '../../Images/boot.png'
import css from '../../Images/css.png'
import fire from '../../Images/fire.png'
import react from '../../Images/react.png'
import node from '../../Images/node.png'
import mongo from '../../Images/mongo.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);

    return (
        <div class="hero bg-base-200 px-12 text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img data-aos="zoom-in-down" className='w-7/12' src={profile} alt=''/>
            <div>
            <h1 class="text-4xl font-bold">Assrafuzzaman Nur</h1>
            <p class="py-6 text-justify">Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Skilled in JavaScript, React.js, Node.js, HTML, CSS, Bootstrap, Tailwind CSS, and Web Development. Web Development professional with a background in Computer Science and Engineering from Daffodil International University.</p>
            <div className='flex gap-4'>
                <div style={{height: '50px'}} className='flex gap-3 mt-16'>
                <img src={react} alt=""/>
                <img src={node} alt=""/>
                <img src={mongo} alt=""/>
                </div>
            <br/>
            <div>
            <img src={boot} alt=""/>
            <img src={html} alt=""/>
            <img src={css} alt=""/>
            <img src={fire} alt=""/>
            </div>
            </div>
            <button class="btn btn-primary">
                <Link to='/contact'>Contact</Link>
            </button>
            </div>
        </div>
        </div>
    );
};

export default Hero;