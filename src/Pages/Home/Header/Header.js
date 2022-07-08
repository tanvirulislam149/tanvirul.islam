import React from 'react';
import OffCanvas from './OffCanvas';
import "./Header.css"
import { Link } from "react-router-dom";
import pic from "../../../Images/tanvir.png"

const Header = () => {
    return (
        <div className='flex justify-between bg-black fixed-top pt-1 pb-1 px-5 md:px-28 shadow-green-500 shadow-sm'>
            <div>
            <Link to="/"><img className='w-16' src={pic} alt=''/></Link>
            </div>
            <div className='my-auto'>
                <OffCanvas></OffCanvas>
            </div>
        </div>
    );
};

export default Header;