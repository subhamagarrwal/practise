"use client";

import React, { useState, useEffect } from "react";

const LearnMoreAboutFreelancing: React.FC = () => {
    const [imageSrc, setImageSrc] = useState('/assets/images/about_freelancing.png');

    useEffect(() => {
        const updateImageSrc = () => {
            if (window.innerWidth >= 844) {
                setImageSrc('/assets/images/about_freelancing.png');
            } else if (window.innerWidth >= 620 && window.innerWidth < 844) {
                setImageSrc('/assets/images/about_freelancing_tablet.png');
            } else {
                setImageSrc('/assets/images/about_freelancing_phone.png');
            }
        };

        updateImageSrc();
        window.addEventListener('resize', updateImageSrc);

        return () => {
            window.removeEventListener('resize', updateImageSrc);
        };
    }, []);

    return (
        <main className="min-h-screen bg-cover bg-center text-white">
            <h2 className="font-medium text-[21px] sx:text-[39px] mx:text-[65px] text-center py-2 pb-0">
                Want to <span className="font-serif italic bg-gradient-to-r from-[#d7ae7d] to-[#9a7a55] inline-block text-transparent bg-clip-text">learn</span> more about <span className="font-serif italic bg-gradient-to-r from-[#d7ae7d] to-[#9a7a55] inline-block text-transparent bg-clip-text">freelancing</span>
            </h2>
            <h4 className="font-medium text-xs sx:text-[25px] text-center pb-4">
                Check out our info site to find out
            </h4>
            <section className="mx:px-16 p-4 sx:p-8 mx:border-0 border-4 border-[#676767] rounded-3xl mx:rounded-none m-4 sx:m-8 mx:mt-10 mx:m-0">
                <img
                    src={imageSrc}
                    alt="about_freelancing"
                    className="sx:border-x-4 border-y-4 border-[#676767] rounded-3xl mx:border-0 mx:rounded-xl h-[522px] sx:h-[750px] mx:h-auto object-cover w-full"
                />
            </section>
        </main>
    );
};

export default LearnMoreAboutFreelancing;
