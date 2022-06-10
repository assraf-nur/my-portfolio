import React, { useEffect } from 'react';
import work1 from '../../Images/hcj.png'
import react from '../../Images/reactjs.png'
import work2 from '../../Images/mern.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);

    return (
        <div>
            <h1 className='text-white text-center text-5xl mt-12'>My service</h1>
            <div data-aos="fade-down" className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 ml-16 place-content-center mt-12'>
            <div class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img style={{width: "300px"}} src={work1} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white text-3xl">HTML and CSS website</h2>
                <p className='text-white text-lg'>I can develop pixel perfect fully responsive websites with HTML and CSS from provided figma design of requirements list.</p>
              </div>
            </div>
            <div data-aos="fade-down" class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img style={{width: "210px"}} src={react} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white text-3xl">Single Page Application with React</h2>
                <p className='text-white text-lg'>I can develop fast and fully responsive single page React web apps with routing (protected and nested), authentication, Optimizing.</p>
              </div>
            </div>
            <div data-aos="fade-down" class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img style={{width: "220px"}} src={work2} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white text-3xl">MERN stack web application</h2>
                <p className='text-white text-xl'>I can develop a full stack web app using MongoDB, Express, React and Node. With authorization features like JWT, admin role, payment system etc.</p>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Work;