import React from "react";

interface SpeakCardsProps {
    title: string;
    imgSrc: string;
}

const SpeakCards: React.FC<SpeakCardsProps> = ({ title, imgSrc }) => {
    return (
        <main className="w-[252px] h-[338px] flex flex-col my-6">
            <h3 className="w-full h-[74px] pl-4 py-5 bg-[#d7ae7d] font-medium text-3xl text-black rounded-t-3xl">
                {title}
            </h3>
            <img src={imgSrc} alt={title} className="grow" />
            <h4 className="self-center flex justify-center h-[49px] w-full py-3 bg-[#343434] text-white font-normal text-xl rounded-b-3xl">
                234,409 experts
            </h4>
        </main>
    );
};

export default SpeakCards;
