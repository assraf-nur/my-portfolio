import React, { useEffect } from 'react';
import total from '../../Images/total.png'
import dvalley from '../../Images/dvalley.png'
import clicks from '../../Images/clicks.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';



const Projects = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
 
    return (
        <div className='mb-12 container'>
            <h1  className='text-white text-center text-5xl mt-12 mb-12'>My Latest Projects</h1>
            <div data-aos="fade-down" className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 ml-16 place-content-center'>
            <div class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img src={total} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white">Total Tools</h2>
                <p className='text-white'>Total tools is a fully functional tools buying web app. Here user will find all kinds of daily tools. User can pay and check shipping update</p>
                <div class="card-actions justify-end">
                    <Link class="btn btn-primary w-full" to='/total'>Details</Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img src={clicks} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white">Mohsin Clicks</h2>
                <p className='text-white'>Mohsin Clicks is a personal service app. By this app user can hire photographer. User has the option of secure login. So all information are safe.</p>
                <div class="card-actions justify-end">
                <Link class="btn btn-primary w-full" to='/mohsin'>Details</Link>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" class="card w-10/12 bg-base-100 shadow-xl">
              <figure><img src={dvalley} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title text-white">D-Valley</h2>
                <p className='text-white'>D-Valley is a warehouse management web app. Here user can update product status and product quantity status.</p>
                <div class="card-actions justify-end">
                <Link class="btn btn-primary w-full" to='/dvalley'>Details</Link>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;