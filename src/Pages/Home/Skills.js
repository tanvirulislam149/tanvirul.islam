import React from "react";
import html from "../../Images/Html.png";
import javascript from "../../Images/javascript.png";
import react from "../../Images/react.png";
import css from "../../Images/css.png";
import tailwind from "../../Images/tailwind.png";
import node from "../../Images/nodejs.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import { motion } from "framer-motion";
import next from "../../Images/nextjs.png";
import redux from "../../Images/redux.png";
import mui from "../../Images/mui.png";
import postgresql from "../../Images/PostgreSQL.png";
import python from "../../Images/python.png";
import django from "../../Images/django.png";
import drf from "../../Images/django-rest-framework.png";
import git from "../../Images/git.png";
import "./Skills.css";

const logo = [
  javascript,
  python,
  react,
  next,
  django,
  drf,
  node,
  express,
  mongodb,
  postgresql,
  redux,
  git,
];

const Skills = () => {
  return (
    <div className="py-20 md:px-28 mt-[800px] md:mt-[500px] lg:mt-[400px] xl:mt-[200px]">
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
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 justify-items-center gap-10">
        {logo.map((l, index) => (
          <div
            style={{ animationDelay: `0.${index + 5}s` }}
            className="rounded-full animate-pulse h-28 w-28 md:h-36 md:w-36 flex justify-center items-center bg-white"
          >
            <img className="h-16 md:h-24 w-16 md:w-24" src={l} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
