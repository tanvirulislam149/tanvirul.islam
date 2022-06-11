import React from 'react';
import email from "../../../Images/email.jpg"

const ContactMe = () => {
    return (
        <div>
            <p className='text-4xl banner-font text-green-300 text-center py-4'>Get In Touch</p>
            <div className='flex pb-16 mx-20'>
                <div className='w-1/2'>
                    <img className='w-full rounded-3xl' src={email} alt="" />
                </div>
                <div className='mx-auto mt-0 text-center text-black'>
                    <form>
                        <input className='my-2 rounded-2xl w-96 px-4 py-1' placeholder='Your Name' type="text" name="name" /> <br />
                        <input className='my-2 rounded-2xl w-96 px-4 py-1' placeholder='Your Email' type="email" name="email" /> <br />
                        <input className=' my-2 rounded-2xl w-96 px-4 py-1' placeholder='Enter Submit of what you want to say' type="text" name="subject" /> <br />
                        <textarea className=' my-2 rounded-2xl w-96 px-4 py-1' placeholder='Your Message' name="message" cols="30" rows="10"></textarea> <br />
                        <input className='bg-white text-black font-bold text-xl my-2 rounded-2xl w-42 px-4 py-1' type="submit" value="Send Email" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;