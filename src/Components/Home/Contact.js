import React from 'react';
import profile from '../../Images/profile.png'
import facebook from '../../Images/facebook.png'
import insta from '../../Images/insta.png'
import git from '../../Images/git.png'
import link from '../../Images/linked.png'

const Contact = () => {
    return (
        <div className='px-12'>
            <div class="card w-96 bg-base-100 shadow-2xl mx-auto mt-12">
            <figure><img src={profile} alt="Shoes" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">Assrafuzzaman Nur</h2>
                <p>Address : 129/5 east ullon, Rampura, Dhaka</p>
                <p>Email : assraf.nur@gmail.com</p>
                <p>Phone : 01760523833</p>
                <div className='flex gap-4 my-5 mx-auto'>
                    <a target='_blank' href='https://www.facebook.com/assrafnur/'>
                        <img src={facebook}></img>
                    </a>
                    <a target='_blank' href='https://www.instagram.com/tesla_nur/'>
                        <img src={insta}></img>
                    </a>
                    <a target='_blank' href='https://github.com/assraf-nur'>
                        <img src={git}></img>
                    </a>
                    <a target='_blank' href='https://www.linkedin.com/in/assrafuzzaman-nur-260610211/'>
                        <img src={link}></img>
                    </a>
                </div>
                <div class="card-actions justify-end">
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;