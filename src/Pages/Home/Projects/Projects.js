import React from 'react';
import "./Projects.css";
import car from "../../../Images/car.png"
import dentcare from "../../../Images/dentcare.png"
import depot from "../../../Images/depot.png"
import { MdComputer } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    let navigate = useNavigate();
    const goToDetails = (id) => {
        navigate(`/project/${id}`)
    }
    return (
        <div className='md:mx-0 py-10'>
            <p className='text-3xl md:text-5xl banner-font pt-8 md:pt-0 pb-8 text-green-500 text-center'>Projects I have done</p>
            <div className='md:flex text-black'>
                <img className='md:w-7/12 w-full' src={car} alt="" />
                <div className='bg-green-500 w-full md:w-1/2 flex flex-col justify-center'>
                    <p className='text-3xl font-extrabold font text-center py-6'>AutoParts Industries Ltd.</p>
                    <li className='pl-8 font-bold pb-4'>Build With MERN Stack Technology</li>
                    <p className='px-4 '>This is a website about Car parts manufacturer company. This company makes some parts and deliver them to customers. Here’s a website to expand their business.</p>
                    <div className='flex justify-evenly mx-5'>
                        <a className='flex py-5' href="https://assignment-12-ca3ac.web.app/" target={"blank"}>
                            <MdComputer className='h-12 w-12 mr-3' />
                            <p className='text-xl md:text-2xl font-bold mt-1'>Live Preview</p>
                        </a>
                        <button className='border-2 border-black hover:bg-black hover:text-white my-6 font-bold px-5' onClick={() => goToDetails(1)}>Details</button>
                    </div>
                </div>
            </div>
            <div className='md:flex flex-row-reverse text-black my-10 md:my-0'>
                <img className='md:w-7/12 w-full' src={depot} alt="" />
                <div className='bg-green-500 w-full md:w-1/2 flex flex-col justify-center'>
                    <p className='text-3xl font-extrabold font text-center py-6'>Depot Warehouse Company</p>
                    <li className='pl-8 font-bold pb-4'>Build With MERN Stack Technology</li>
                    <p className='px-4 '>A warehouse company website where people can store
                        products and can see the products they store.</p>
                    <div className='flex justify-evenly mx-5'>
                        <a className='flex py-5' href="https://warehouse-management-eb91a.web.app/" target={"blank"}>
                            <MdComputer className='h-12 w-12 mr-3' />
                            <p className='text-xl md:text-2xl font-bold mt-1'>Live Preview</p>
                        </a>
                        <button className='border-2 border-black hover:bg-black hover:text-white my-6 font-bold px-5' onClick={() => goToDetails(2)}>Details</button>
                    </div>
                </div>
            </div>
            <div className='md:flex text-black'>
                <img className='md:w-7/12 w-full' src={dentcare} alt="" />
                <div className='w-full md:w-1/2 bg-green-500 flex flex-col justify-center'>
                    <p className='text-3xl font-extrabold font text-center py-6'>DentCare Private Ltd.</p>
                    <p className='px-4 '>It is a private dental clinic website where patients can see the treatments and price of the treatments. They can see the treatments details also after login to the website.</p>
                    <div className='flex justify-evenly mx-5'>
                        <a className='flex py-5' href="https://assignment-10-2b635.web.app/" target={"blank"}>
                            <MdComputer className='h-12 w-12 mr-3' />
                            <p className='text-xl md:text-2xl font-bold mt-1'>Live Preview</p>
                        </a>
                        <button className='border-2 border-black hover:bg-black hover:text-white my-6 font-bold px-5' onClick={() => goToDetails(3)}>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;