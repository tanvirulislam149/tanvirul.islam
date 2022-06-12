import { faGripLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OffCanvas = () => {
    return (
        <div>
            <button class="inline-block  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out mr-1.5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon className='h-8 text-green-300' icon={faGripLines} /></button>

            <div class="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out bg-green-300 text-black top-0 right-0 border-none w-64" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header flex items-center justify-between p-4">
                    <h5 class="offcanvas-title mb-0 leading-normal text-5xl font-bold text-black font" id="offcanvasRightLabel">taNvir</h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                    <p className='text-2xl'>Here will be added some routes</p>
                </div>
            </div>
        </div>
    );
};

export default OffCanvas;