import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../Images/profile.png'
import html from '../../Images/html.png'
import boot from '../../Images/boot.png'
import css from '../../Images/css.png'
import fire from '../../Images/fire.png'
import react from '../../Images/react.png'
import node from '../../Images/node.png'
import mongo from '../../Images/mongo.png'

const Hero = () => {
    return (
        <div class="hero bg-base-200 px-12 text-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img className='w-7/12' src={profile} alt=''/>
            <div>
            <h1 class="text-6xl font-bold">Assrafuzzaman Nur</h1>
            <p class="py-6">Professional Web Developer. 3+ year of developing experience. Now working as a freelancer in Logismico Tech.</p>
            <div className='flex gap-5 my-5'>
            <img src={react} alt=""/>
            <img src={node} alt=""/>
            <img src={mongo} alt=""/>
            <img src={boot} alt=""/>
            <img src={html} alt=""/>
            <img src={css} alt=""/>
            <img src={fire} alt=""/>
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