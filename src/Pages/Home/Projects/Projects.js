import React from 'react';
import "./Projects.css";
import car from "../../../Images/car.png"
import dentcare from "../../../Images/dentcare.png"
import depot from "../../../Images/depot.png"
import { MdComputer } from "react-icons/md";

const Projects = () => {
    return (
        <div className='md:mx-20 py-10 '>
            <p className='text-3xl md:text-5xl banner-font pt-8 md:pt-0 pb-8 text-green-300 text-center'>Projects I have done</p>
            <div className='flex text-black'>
                <img className='w-7/12' src={car} alt="" />
                <div className='bg-violet-200 w-1/2'>
                    <p className='text-3xl font-extrabold font text-center py-6'>AutoParts Industries Ltd.</p>
                    <li className='pl-8 font-bold pb-4'>Build With MERN Stack Technology</li>
                    <p className='px-4 '>This is a website about Car parts manufacturer company. This company makes some parts and deliver them to customers. Here’s a website to expand their business.</p>
                    <p className='px-4 py-4'><span className='font-bold'>Technologies:</span> React, Firebase, NodeJs, ExpressJs, MongoDB, Stripe</p>
                    <a className='flex mt-5 mx-10' href="https://assignment-12-ca3ac.web.app/" target={"blank"}>
                        <MdComputer className='h-12 w-12 mx-3' />
                        <p className='text-2xl font-bold mt-1'>Live Preview</p>
                    </a>
                </div>
            </div>
            <div className='flex text-black'>
                <div className='w-1/2 bg-fuchsia-100'>
                    <p className='text-3xl font-extrabold font text-center py-6'>AutoParts Industries Ltd.</p>
                    <li className='pl-8 font-bold pb-4'>Build With MERN Stack Technology</li>
                    <p className='px-4 '>A warehouse company website where people can store
                        products and can see the products they store.</p>
                    <p className='px-4 py-4'><span className='font-bold'>Technologies:</span> React, Firebase, NodeJs, ExpressJs, MongoDB</p>
                    <a className='flex mt-5 mx-10' href="https://warehouse-management-eb91a.web.app/" target={"blank"}>
                        <MdComputer className='h-12 w-12 mx-3' />
                        <p className='text-2xl font-bold mt-1'>Live Preview</p>
                    </a>
                </div>
                <img className='w-7/12' src={depot} alt="" />
            </div>
            <div className='flex text-black'>
                <img className='w-7/12' src={dentcare} alt="" />
                <div className='w-1/2 bg-red-100'>
                    <p className='text-3xl font-extrabold font text-center py-6'>AutoParts Industries Ltd.</p>
                    <li className='pl-8 font-bold pb-4'>Build With MERN Stack Technology</li>
                    <p className='px-4 '>It is a private dental clinic website where patients can see the treatments.</p>
                    <p className='px-4 py-4'><span className='font-bold'>Technologies:</span> React, Firebase, React Router</p>
                    <a className='flex mt-5 mx-10' href="https://assignment-10-2b635.web.app/" target={"blank"}>
                        <MdComputer className='h-12 w-12 mx-3' />
                        <p className='text-2xl font-bold mt-1'>Live Preview</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;