import React from "react";
import BellIcon from '../../../public/assets/images/bellIcon.png';
import ProfileLogo from '../../../public/assets/images/profileLogo.png';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-6 mx:p-8 bg-[#000] text-white rounded-3xl mx:pl-16">
            <div>
                <div className="font-normal text-5xl font-sans">
                    Xlancr
                </div>
                <div className="font-extralight text-sm tracking-wider">
                    freelancr
                </div>
            </div>
            <div className="flex items-center pr-8 hidden mx:flex">
                <img src={BellIcon.src} alt="bellIcon" className="w-6 h-6 mr-8 rounded-full" />
                <img src={ProfileLogo.src} alt="Profile_logo" className="rounded-full h-12 w-12 mr-4" />
                <span className="mr-1 font-normal text-xl">Name goes here</span>
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>
            </div>
            <div className="mx:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
