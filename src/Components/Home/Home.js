import React from 'react';
import Connect from './Connect';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <Connect></Connect>
        </div>
    );
};

export default Home;