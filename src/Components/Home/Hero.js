import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../../Images/profile.png";
import html from "../../Images/html.png";
import boot from "../../Images/boot.png";
import css from "../../Images/css.png";
import fire from "../../Images/fire.png";
import react from "../../Images/react.png";
import node from "../../Images/node.png";
import mongo from "../../Images/mongo.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div class="hero bg-base-200 px-12 text-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img data-aos="zoom-in-down" className="w-7/12" src={profile} alt="" />
        <div>
          <h1 class="text-4xl font-bold">Assrafuzzaman Nur</h1>
          <h1 className="text-xl font-bold">
            <Typed
              strings={[
                "I'm a Web Developer",
                "Working with React.js",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h1>
          <p className="mt-12 text-2xl">Web Developer with expertise on</p>
          <p className="font-bold">
          <Typed
              strings={[
                "JavaScript",
                "React.js",
                "Node.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "MongoDB",
                "Firebase",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </p>

          <div className="flex gap-4">
            <div style={{ height: "50px" }} className="flex gap-3 mt-16">
              <img src={react} alt="" />
              <img src={node} alt="" />
              <img src={mongo} alt="" />
            </div>
            <br />
            <div>
              <img src={boot} alt="" />
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={fire} alt="" />
            </div>
          </div>
          <button class="btn btn-primary">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
