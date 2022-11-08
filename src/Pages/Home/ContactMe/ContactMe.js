import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../../Images/tanvir.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";



const ContactMe = () => {
  const [filled, setFilled] = useState(false);
  const form = useRef();
  const toastId = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    toast(
      <div class="flex items-center justify-center">
        <div
          class="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <p className="pl-2">Pending</p>
      </div>,
      {
        hideProgressBar: true,
      }
    );
    setFilled(true);

    emailjs
      .sendForm(
        "service_26rh3ie",
        "template_wdsfk9a",
        form.current,
        "YPI9Q0zxNM4Xgxnux"
      )
      .then(
        (result) => {
          e.target.reset();
          setFilled(false);
          toast.dismiss(toastId.current);
          toast.success("Sending Email Successful");
        },
        (error) => {
          e.target.reset();
          setFilled(false);
          toast.dismiss(toastId.current);
          toast.error("Sending Email Failed. Please Try Again");
        }
      );
  };

  return (
    <div id="contactMe" className="">
      <div className="mt-10 text-center ">
        <p className="banner-font md:text-7xl text-5xl text-sky-500">
          GET IN TOUCH
        </p>
        <div className="flex justify-center pb-8">
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
        </div>
      </div>
      <div className="md:flex justify-center p-2 pb-6">
        <div className="md:w-7/12 w-full md:mx-10 md:pl-10">
          <p className="text-3xl font-semibold">Contact Information</p>
          <p className="text-xl font-semibold text-slate-400 py-2">I am ready to discuss anything in person</p>
          <div>
            <div className="flex mt-4 border-sky-900 border-2 rounded-lg p-4">
              <div className="bg-sky-400 rounded-full">
                <BsTelephone className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact on phone</p>
                <p className="md:text-xl text-lg text-slate-400">+8801553514065</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 border-sky-900 border-2 rounded-lg p-4">
              <div className="bg-sky-400 rounded-full">
                <AiOutlineMail className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact on mail</p>
                <p className="md:text-xl text-lg text-slate-400">tanvirulislam149@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 border-sky-900 border-2 rounded-lg p-4">
              <div className="bg-sky-400 rounded-full">
                <GrLocation className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact address</p>
                <p className="md:text-xl text-lg text-slate-400">Chattogram, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-8/12 w-full mt-20 border-sky-900 border-2 rounded-lg p-4 md:ml-10 md:mr-20 md:mt-0 text-black">
          <form ref={form} onSubmit={sendEmail}>
            <p className="text-sky-200">Name</p>
            <input
              className="my-2 rounded-md w-full bg-black border-2 border-sky-900 px-4 py-2"
              required
              placeholder="Enter Your Name"
              type="text"
              name="user_name"
            />{" "}
            <br />
            <p className="text-sky-200">Email</p>
            <input
              className="my-2 rounded-md w-full bg-black border-2 border-sky-900 px-4 py-2"
              required
              placeholder="Enter Your Email"
              type="email"
              name="user_email"
            />{" "}
            <br />
            <p className="text-sky-200">Subject</p>
            <input
              className="my-2 rounded-md w-full bg-black border-2 border-sky-900 px-4 py-2"
              required
              placeholder="Enter Subject"
              type="text"
              name="subject"
            />{" "}
            <br />
            <p className="text-sky-200">Message</p>
            <textarea
              className=" my-2 rounded-md w-full bg-black border-2 border-sky-900 px-4 py-2"
              required
              placeholder="Enter Your Message"
              name="message"
              cols="30"
              rows="7"
            ></textarea>{" "}
            <br />
            <input
              className="cursor-pointer bg-sky-400 text-black font-bold text-xl my-2 rounded-md w-42 px-4 py-2"
              type="submit"
              value="Send Email"
            />
          </form>
        </div>
      </div>

      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4caf50"
            fill-opacity="1"
            d="M0,32L48,64C96,96,192,160,288,165.3C384,171,480,117,576,85.3C672,53,768,43,864,69.3C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <div className="absolute bottom-2 invisible md:visible md:left-1/3">
          <div className="flex pb-6">
            <img className="bg-black w-24" src={logo} alt="" />
            <div className="banner-font text-black pl-5">
              <p className="text-4xl">Tanvirul Islam</p>
              <p className="text-2xl">
                A professional frontend developer
              </p>
            </div>
          </div>
          <p className="text-font text-black flex">
            <FaCopyright className="my-auto mr-1" />
            Copyright {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
        <div className="absolute bottom-2 left-5 visible md:invisible">
          <p className="text-font text-black flex">
            <FaCopyright className="my-auto mr-1" />
            Copyright {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
        <ToastContainer position="top-center" theme="dark" />
      </div>
    </div>
  );
};

export default ContactMe;
