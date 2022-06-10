import React from 'react';
import OffCanvas from './OffCanvas';
import "./Header.css"

const Header = () => {
    return (
        <div className='flex justify-between fixed-top pt-3 pb-1 px-5 md:px-28'>
            <div>
                <p className='text-5xl font-bold text-white font'>taNvir</p>
            </div>
            <div>
                <OffCanvas></OffCanvas>
            </div>
        </div>
    );
};

export default Header;