import React from 'react';
import ILXCard from './ILX_Card';

const LoveXlancrPage: React.FC = () => {
    return (
        <main className='min-h-full pb-40 mx:px-2 px-6 flex flex-col justify-center items-center'>
            <section className="text-white flex flex-col justify-center text-center items-center mb-12">
                <h2 className="text-[25.35px] sx:text-[50.7px] mx:text-[65px] font-medium mx:p-1">
                    Independents <span className="font-serif italic bg-gradient-to-r from-[#d7ae7d] to-[#9a7a55] inline-block text-transparent bg-clip-text">love</span> Xlancr
                </h2>
                <h5 className="text-[9.75px] sx:text-base mx:text-[25px] font-medium">
                    A commission-free freelancer marketplace
                </h5>
            </section>

            <div className="mx:px-20 mx:grid mx:grid-cols-3 mx:gap-4 mx:grid-rows-10 mx:justify-items-center mx:h-screen sx:flex sx:flex-wrap sm:justify-around">
                <section className='row-start-1 row-end-4 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta3.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content="Man Xlancr is just crushing the game right now. Every freelancer should be on this platform."
                    />
                </section>
                <section className='row-start-1 row-end-7 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta1.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content={`Man Xlancr is just crushing the game right now. Every freelancer should be on this platform. Man Xlancr is just crushing the game right now. Every freelancer should be on this platform.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform.`}
                    />
                </section>
                <section className='row-start-1 row-end-5 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta2.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content={`Man Xlancr is just crushing the game right now. Every freelancer should be on this platform. Man Xlancr is just crushing the game right now.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform..`}
                    />
                </section>
                <section className='row-start-4 row-end-10 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta1.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content={`Man Xlancr is just crushing the game right now. Every freelancer should be on this platform. Man Xlancr is just crushing the game right now. Every freelancer should be on this platform.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform.`}
                    />
                </section>
                <section className='row-start-7 row-end-11 mx:h-[350px] sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta2.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content={`Man Xlancr is just crushing the game right now. Every freelancer should be on this platform. Man Xlancr is just crushing the game right now. Every freelancer should be on this platform.\nMan Xlancr is just crushing the game right now. Every freelancer should be on this platform..`}
                    />
                </section>
                <section className='row-start-5 row-end-8 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta3.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content="Man Xlancr is just crushing the game right now. Every freelancer should be on this platform."
                    />
                </section>
                <section className='row-start-8 row-end-11 sx:pb-6 mx:pb-0 sm:w-[44%] mx:w-full'>
                    <ILXCard
                        img_src="/assets/images/insta3.svg"
                        name="Samhitha"
                        username="samhitha_ry"
                        icon_src="/assets/images/Xlancr_logo_cross.svg"
                        content="Man Xlancr is just crushing the game right now. Every freelancer should be on this platform."
                    />
                </section>
            </div>
        </main>
    );
};

export default LoveXlancrPage;
