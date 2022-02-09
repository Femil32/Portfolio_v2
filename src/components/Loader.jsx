import React from "react";

function Loader() {
    return (
        <div
            id='loader'
            className='fixed top-0 left-0 min-w-full text-black-200 bg-black-200 flex justify-center items-center min-h-screen overflow-hidden z-[99999]'
        >
            <div className='absolute top-0 left-0 w-0 h-4 load-top bg-red-600'></div>
            Loader
        </div>
    );
}

export default Loader;
