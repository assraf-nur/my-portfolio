import React from 'react';
import total from '../../Images/total.png'
import dvalley from '../../Images/dvalley.png'
import doctors from '../../Images/doctor.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-white text-center text-5xl mt-5'>My Latest Projects</h1>
            <div className='grid grid-cols-3 ml-42 gap-12 place-content-center mt-16'>
                <img className='w-96' src={total} alt=""/>
                <img className='w-96' src={dvalley} alt=""/>
                <img className='w-96' src={doctors} alt=""/>
            </div>
        </div>
    );
};

export default Projects;