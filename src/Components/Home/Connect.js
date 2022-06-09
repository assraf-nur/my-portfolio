import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";

const Connect = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3nw5pq3', 'template_hd1xwpv', form.current, 'U5clgeWO0TzL0u_aP')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, 
          (error) => {
              console.log(error.text);
          });
          e.target.reset();
        };

    return (
        <div data-aos="fade-up-left" className='mb-12'>
            <h1 className='text-center text-white text-5xl'>Feel free to connect with me</h1>
            <form ref={form} onSubmit={sendEmail} className='border p-5 rounded-lg mt-12 w-96 mx-auto shadow-2xl text-white'>
              <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full max-w-xs" />
              <br/>
              <input type="email" placeholder="Your Email" name='email' class="input input-bordered w-full max-w-xs mt-5" />
              <br/>
              <textarea class="textarea textarea-bordered mt-5 w-full" name='message' placeholder="Type your message here"></textarea>
              <br/>
              <input className='btn btn-primary mt-5' type="submit" name="submit" value="SEND"/>
            </form>
        </div>
    );
};

export default Connect;