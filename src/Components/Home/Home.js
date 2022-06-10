import React from 'react';
import About from './About';
import Connect from './Connect';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Work from './Work';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Work></Work>
            <Projects></Projects>
            <Connect></Connect>
            <Footer></Footer>
        </div>
    );
};

export default Home;