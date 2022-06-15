import React from 'react';
import OffCanvas from './OffCanvas';
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='flex justify-between bg-black bg-opacity-60 fixed-top pt-3 pb-1 px-5 md:px-28 shadow-green-300 shadow-sm'>
            <div>
                <p className='text-5xl font-bold font text-green-300'><Link to="/">taNvir</Link></p>
            </div>
            <div>
                <OffCanvas></OffCanvas>
            </div>
        </div>
    );
};

export default Header;