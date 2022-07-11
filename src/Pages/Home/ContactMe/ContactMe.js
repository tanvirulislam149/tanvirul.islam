import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../../Images/tanvir.png";
import bg from "../../../Images/bg.svg";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_26rh3ie",
        "template_wdsfk9a",
        form.current,
        "YPI9Q0zxNM4Xgxnux"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contactMe">
      <div className="md:pl-20 pl-5">
        <div className="flex pb-8">
          <div className="rounded-full bg-green-500 h-6 w-6"></div>
          <div className="mx-3 rounded-full bg-green-500 h-6 w-6"></div>
          <div className="rounded-full bg-green-500 h-6 w-6"></div>
        </div>
        <p className="banner-font md:text-7xl text-5xl text-green-500">
          GET IN TOUCH
        </p>
      </div>
      <div className="md:px-20 px-5 my-16 py-14 text-black bg-green-500">
        <p className="text-4xl font-bold pb-5 text-font">
          I am ready to discuss everything in person
        </p>
        <div className="md:flex justify-between">
          <div className="md:flex">
            <FaPhoneAlt className="md:h-16 md:w-16 h-10 w-10 my-auto" />
            <div>
              <p className="text-3xl md:text-4xl font-bold md:pl-5 text-font">
                Phone
              </p>
              <p className="text-xl md:text-3xl md:pl-5 text-font">
                +8801553514065
              </p>
            </div>
          </div>
          <div className="md:flex">
            <MdEmail className="md:h-20 h-14 md:w-20 w-14" />
            <div>
              <p className="text-3xl md:text-4xl font-bold md:pl-5 text-font">
                Email
              </p>
              <p className="text-xl md:text-3xl md:pl-5 text-font">
                tanvirulislam149@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex pb-6 md:mx-20">
        <div className="md:w-1/2">
          <img
            className="w-48 mx-auto -rotate-45 py-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTy4aybMTch2kmNcth1Alztez5aGuSodGTg&usqp=CAU"
            alt=""
          />
          <p className="text-5xl text-green-500 text-font text-center">
            Wanna ask me something?
          </p>
          <p className="text-5xl text-green-500 text-font text-center">
            Just send me an email.
          </p>
        </div>
        <div className="md:mx-auto mx-5 mt-20 md:mt-0  text-center text-black">
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="my-2 rounded-md md:w-96 w-full px-4 py-2"
              required
              placeholder="Your Name"
              type="text"
              name="user_name"
            />{" "}
            <br />
            <input
              className="my-2 rounded-md md:w-96 w-full px-4 py-2"
              required
              placeholder="Your Email"
              type="email"
              name="user_email"
            />{" "}
            <br />
            <input
              className="my-2 rounded-md md:w-96 w-full px-4 py-2"
              required
              placeholder="Subject"
              type="text"
              name="subject"
            />{" "}
            <br />
            <textarea
              className=" my-2 rounded-md md:w-96 w-full px-4 py-2"
              required
              placeholder="Your Message"
              name="message"
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />
            <input
              className="cursor-pointer bg-green-500 text-black font-bold text-xl my-2 rounded-md w-42 px-4 py-2"
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
        <p className="absolute bottom-20 left-1/3 text-font text-black">
          Developed by Tanvir
        </p>
      </div>
    </div>
  );
};

export default ContactMe;
