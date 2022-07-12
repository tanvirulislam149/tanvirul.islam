import React from "react";
import html from "../../Images/html.png";
import javascript from "../../Images/javascript.png";
import react from "../../Images/react.png";
import css from "../../Images/css.png";
import tailwind from "../../Images/tailwind.svg";
import bootstrap from "../../Images/bootstrap.png";
import firebase from "../../Images/firebase.svg";
import node from "../../Images/node.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.svg";
import stripe from "../../Images/stripe.png";
import axios from "../../Images/axios.svg";

const Skills = () => {
   return (
      <div className="my-20 py-20 md:px-20">
         <div className="md:pl-0 pl-5 py-0">
            <div className="flex pb-8">
               <div className="rounded-full bg-green-500 h-6 w-6"></div>
               <div className="mx-3 rounded-full bg-green-500 h-6 w-6"></div>
               <div className="rounded-full bg-green-500 h-6 w-6"></div>
            </div>
            <p className="banner-font md:text-7xl text-5xl text-green-500">
               SKILLS
            </p>
         </div>
         <div className="grid md:grid-cols-4 grid-cols-2 gap-4 bg-green-100 p-5 rounded-xl">
            <img className="w-24 mx-auto" src={javascript} alt="" />
            <img className="w-32 mx-auto" src={react} alt="" />
            <img className="w-20 mx-auto" src={html} alt="" />
            <img className="w-20 mx-auto" src={css} alt="" />
            <img className="w-52 my-auto mx-auto" src={tailwind} alt="" />
            <img className="w-32 my-auto mx-auto" src={bootstrap} alt="" />
            <img className="w-52 my-auto mx-auto" src={firebase} alt="" />
            <img className="w-28 my-auto mx-auto" src={node} alt="" />
            <img className="w-56 my-auto mx-auto" src={express} alt="" />
            <img className="w-56 my-auto mx-auto" src={mongodb} alt="" />
            <img className="w-32 my-auto mx-auto" src={stripe} alt="" />
            <img className="w-36 my-auto mx-auto" src={axios} alt="" />
         </div>
      </div>
   );
};

export default Skills;
