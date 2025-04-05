import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const ContactMe = () => {
  const [filled, setFilled] = useState(false);
  const form = useRef();
  const toastId = React.useRef(null);
  const condition = true;

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
        autoClose: false,
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
    <div id="contactMe" className="mb-20">
      <div className="mt-10 text-center ">
        <p className="banner-font md:text-7xl text-5xl text-white">
          GET IN TOUCH
        </p>
        <div className="flex justify-center pb-8">
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
        </div>
      </div>
      <div className="md:flex justify-center p-2 pb-6">
        <div className="md:w-7/12 w-full md:mx-10 md:pl-10">
          <p className="text-3xl font-semibold">Contact Information</p>
          <p className="text-xl font-semibold text-slate-400 py-2">
            I am ready to discuss anything in person
          </p>
          <div>
            <div className="flex mt-4 border-white border-2 rounded-lg p-4">
              <div className="bg-white rounded-full">
                <BsTelephone className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact on phone</p>
                <p className="md:text-xl text-lg text-slate-400">
                  +8801553514065
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 border-white border-2 rounded-lg p-4">
              <div className="bg-white rounded-full">
                <AiOutlineMail className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact on mail</p>
                <p className="md:text-xl text-lg text-slate-400">
                  tanvirulislam149@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-4 border-white border-2 rounded-lg p-4">
              <div className="bg-white rounded-full">
                <GrLocation className="h-16 w-16 p-3 text-black" />
              </div>
              <div className="ml-5">
                <p className="text-xl font-semibold">Contact address</p>
                <p className="md:text-xl text-lg text-slate-400">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-8/12 w-full mt-20 border-white border-2 rounded-lg bg-gray-900 p-4 md:ml-10 md:mr-20 md:mt-0 text-white">
          <form ref={form} onSubmit={sendEmail}>
            <p className="text-sky-200">Name</p>
            <input
              className="my-2 rounded-md w-full  border-2  border-white px-4 py-2 bg-black"
              required
              placeholder="Enter Your Name"
              type="text"
              name="user_name"
            />{" "}
            <br />
            <p className="text-sky-200">Email</p>
            <input
              className="my-2 rounded-md w-full bg-black border-2 border-white px-4 py-2"
              required
              placeholder="Enter Your Email"
              type="email"
              name="user_email"
            />{" "}
            <br />
            <p className="text-sky-200">Subject</p>
            <input
              className="my-2 rounded-md w-full bg-black border-2 border-white px-4 py-2"
              required
              placeholder="Enter Subject"
              type="text"
              name="subject"
            />{" "}
            <br />
            <p className="text-sky-200">Message</p>
            <textarea
              className=" my-2 rounded-md w-full bg-black border-2 border-white px-4 py-2"
              required
              placeholder="Enter Your Message"
              name="message"
              cols="30"
              rows="5"
            ></textarea>{" "}
            <br />
            <input
              disabled={filled ? true : false}
              className="cursor-pointer bg-white text-black font-bold text-xl my-2 rounded-md w-42 px-4 py-2"
              type="submit"
              value="Send Email"
            />
          </form>
        </div>
        <ToastContainer position="top-center" transition={Zoom} />
      </div>
    </div>
  );
};

export default ContactMe;
