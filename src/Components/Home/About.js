import React, { useEffect } from "react";
import me from "../../Images/me.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
  return (
    <div data-aos="fade-down" className="mt-12 container mx-auto">
      <h1 className="text-white text-5xl text-center">.About Me.</h1>
      <div class="card md:card-side bg-base-100 mx-auto mt-12">
        <figure>
          <img style={{ width: "400px" }} src={me} alt="Album" />
        </figure>
        <div class="card-body">
          <p className="text-white text-xl text-justify">
            Experienced Web Developer with a demonstrated history of working in
            the information technology and services industry. Skilled in
            JavaScript, React.js, Node.js, HTML, CSS, Bootstrap, Tailwind CSS,
            and Web Development. Web Development professional with a background
            in Computer Science and Engineering from Daffodil International
            University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
