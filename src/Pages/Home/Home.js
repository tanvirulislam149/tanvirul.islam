import React from 'react';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Header from "./Header/Header"
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;