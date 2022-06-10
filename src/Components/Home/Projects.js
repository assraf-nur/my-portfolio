import React, { useEffect } from 'react';
import total from '../../Images/total.png'
import dvalley from '../../Images/dvalley.png'
import clicks from '../../Images/clicks.png'
import Aos from "aos";
import "aos/dist/aos.css";



const Projects = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
 
    return (
        <div className='mb-12 mx-auto'>
            <h1 className='text-white text-center text-5xl mt-12 mb-12'>My Latest Projects</h1>
            <div data-aos="fade-right" class="card lg:card-side bg-base-100 shadow-xl mt-12 text-white w-8/12 mx-auto">
            <figure><img style={{width: '200px'}} src={total} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-5xl mb-12">Total Tools</h2>
                <div>
                <p className='text-white'><a target='_blank' className='text-xl ml-2 btn btn-primary text-white' href="https://total-tools-47ca6.web.app/">Total-Tools Live</a></p>
                <p className='mt-3 text-white'><a target='_blank' className='text-xl ml-2 btn  text-white' href="https://github.com/assraf-nur/Total-tools-client">Client Side Link</a></p>
                <p className='mt-3 text-white'><a target='_blank' className='text-xl ml-2 btn text-white' href="https://github.com/assraf-nur/Total-tools-server">Server Side Link</a></p>
                <div className='mt-12 ml-2'>
                    <p>Features</p>
                    • User can order their desired tools <br/>
                    • Firebase authentication activated for
                    secure login and register. <br/>
                    • Use has the payment option, if the user
                    not paid yet he can cancel the order. <br/>
                    • Admin can access the all-major options for
                    supporting user. <br/>
                    • Admin can add and delete tool and can see
                    the user’s wish list.
                </div>
                </div>
                <div class="card-actions justify-end">
                </div>
            </div>
            </div>


            <div data-aos="fade-left" class="card lg:card-side bg-base-100 shadow-xl mt-12 text-white w-8/12 mx-auto">
            <figure><img style={{width: '200px'}} src={dvalley} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-5xl mb-12">D-Valley</h2>
                <div>
                <p className='text-white'><a target='_blank' className='text-xl ml-2 btn  btn-primary text-white' href="https://d-valley-2a581.web.app/">D-Valley Live</a></p>
                <p className='mt-3 text-white'><a target='_blank' className='text-xl ml-2 btn  text-white' href="https://github.com/assraf-nur/D-valley-Client">Client Side Link</a></p>
                <p className='mt-3 text-white'><a target='_blank' className='text-xl ml-2 btn  text-white' href="https://github.com/assraf-nur/D-valley-Server">Server Side Link</a></p>
                <div className='mt-12 ml-2'>
                    <p>Features</p>
                    • User can manage products warehouse <br/>
                    • Firebase authentication activated for
                      secure login and register. <br/>
                    • User can increase and decrease product
                      quantity in manage inventory page.<br/>
                    • User can add new products and delete
                      stockout product. <br/>
                    • Admin can add and delete tool and can see
                    the user’s wish list.
                </div>
                </div>
                <div class="card-actions justify-end">
                </div>
            </div>
            </div>


            <div data-aos="fade-up-right" class="card lg:card-side bg-base-100 shadow-xl mt-12 text-white w-8/12 mx-auto">
            <figure><img style={{width: '200px'}} src={clicks} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-5xl mb-12">Mohsin-Clicks</h2>
                <div>
                <p className='text-white'><a target='_blank' className='text-xl ml-2 btn-primary btn  text-white' href="https://mohsin-click.web.app/">Mohsin-Clicks Live</a></p>
                <p className='mt-3 text-white'><a target='_blank' className='text-xl ml-2 btn  text-white' href="https://github.com/assraf-nur/Mohsin-clicks">Client Side Link</a></p>
                <div className='mt-12 ml-2'>
                    <p>Features</p>
                    • User can choose the package <br/>
                    • Can see the customers’ review <br/>
                    • Various package and their details for user<br/>
                    • Firebase Authentication for secure checkout.<br/>
                </div>
                </div>
                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default Projects;