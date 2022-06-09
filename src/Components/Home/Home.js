import React from 'react';
import Connect from './Connect';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <Connect></Connect>
            <Footer></Footer>
        </div>
    );
};

export default Home;