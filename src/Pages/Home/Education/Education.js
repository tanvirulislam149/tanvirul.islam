import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork } from "react-icons/md";



const Education = () => {
  return (
    <div className='my-20'>
      <div className="py-5 md:pl-32 pl-4">
        <p className="banner-font md:text-7xl text-5xl text-sky-500">
          EDUCATION & EXPERIENCE
        </p>
        <div className="flex">
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
          <div className="mr-2 rounded-full bg-sky-500 h-5 w-5"></div>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(17 24 39)', color: '#fff' }}
          className="vertical-timeline-element--work"
          date="Aug 2022 - present"
          iconStyle={{ background: 'rgb(17 24 39)', color: 'rgb(14 165 233)' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Reactjs Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Across The Globe (ATG), India</h4>
          <p>
            Making Responsive Frontend, Bug Fixing, API Integration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: 'rgb(17 24 39)', color: '#fff' }}
          className="vertical-timeline-element--work"
          date="Jan 2023 - present"
          iconStyle={{ background: 'rgb(17 24 39)', color: 'rgb(14 165 233)' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Port City International University</h3>
          <h4 className="vertical-timeline-element-subtitle">Chattogram, Bangladesh</h4>
          <p>
            Computer Science & Engineering
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;