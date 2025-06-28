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
import { motion } from "framer-motion";
import next from "../../Images/Nextjs-logo.svg-removebg-preview.png";
import redux from "../../Images/redux-removebg-preview.png";
import nextAuth from "../../Images/nauth-removebg-preview.png";
import mui from "../../Images/mui-removebg-preview.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="py-20 md:px-28 mt-[500px] lg:mt-0">
      <div className="md:pl-0 pl-5 py-0">
        <p className="banner-font md:text-7xl text-5xl text-white">SKILLS</p>
        <div className="flex pb-8">
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-white h-5 w-5"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 bg-white p-10 borderRadius">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="drop-shadow-lg w-24 mx-auto"
          src={javascript}
          alt=""
          title="JavaScript"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="drop-shadow-lg w-32 mx-auto"
          src={react}
          alt=""
          title="React.js"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="drop-shadow-lg w-36 my-auto mx-auto"
          src={next}
          alt=""
          title="Next.js"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="drop-shadow-lg w-24 my-auto mx-auto"
          src={nextAuth}
          alt=""
          title="NextAuth.js"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="drop-shadow-lg w-24 my-auto mx-auto"
          src={redux}
          alt=""
          title="Redux"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="drop-shadow-lg w-20 mx-auto"
          src={html}
          alt=""
          title="HTML"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="drop-shadow-lg w-20 mx-auto"
          src={css}
          alt=""
          title="CSS"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="drop-shadow-lg w-24 my-auto mx-auto"
          src={mui}
          alt=""
          title="Metarial UI"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="drop-shadow-lg w-52 my-auto mx-auto"
          src={tailwind}
          alt=""
          title="Tailwind CSS"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="drop-shadow-lg w-32 my-auto mx-auto"
          src={bootstrap}
          alt=""
          title="Bootstrap"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="drop-shadow-lg w-52 my-auto mx-auto"
          src={firebase}
          alt=""
          title="Firebase"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="drop-shadow-lg w-28 my-auto mx-auto"
          src={node}
          alt=""
          title="Node.js"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="drop-shadow-lg w-56 my-auto mx-auto"
          src={express}
          alt=""
          title="Express.js"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="drop-shadow-lg w-56 my-auto mx-auto"
          src={mongodb}
          alt=""
          title="MongoDB"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="drop-shadow-lg w-32 my-auto mx-auto"
          src={stripe}
          alt=""
          title="Stripe"
        />
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="drop-shadow-lg w-36 my-auto mx-auto"
          src={axios}
          alt=""
          title="Axios"
        />
      </div>
    </div>
  );
};

export default Skills;
