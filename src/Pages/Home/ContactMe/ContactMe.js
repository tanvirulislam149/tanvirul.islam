import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from "../../../Images/email.jpg"

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_26rh3ie", "template_wdsfk9a", form.current, "YPI9Q0zxNM4Xgxnux")
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactMe'>
            <p className='text-4xl banner-font text-green-500 text-center py-12'>Get In Touch</p>
            <div className='md:flex pb-16 md:mx-20'>
                <div className='md:w-1/2'>
                    <img className='w-full' src={email} alt="" />
                </div>
                <div className='md:mx-auto mx-5 mt-20 md:mt-0  text-center text-black'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='my-2 rounded-2xl md:w-96 w-full px-4 py-2' required placeholder='Your Name' type="text" name="user_name" /> <br />
                        <input className='my-2 rounded-2xl md:w-96 w-full px-4 py-2' required placeholder='Your Email' type="email" name="user_email" /> <br />
                        <textarea className=' my-2 rounded-2xl md:w-96 w-full px-4 py-2' required placeholder='Your Message' name="message" cols="30" rows="10"></textarea> <br />
                        <input className='cursor-pointer bg-green-500 text-black font-bold text-xl my-2 rounded-2xl w-42 px-4 py-2' type="submit" value="Send Email" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;