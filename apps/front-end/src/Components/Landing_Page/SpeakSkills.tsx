import React from "react";
import SpeakCards from "./SpeaksCard";

const SpeakSkills: React.FC = () => {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-around p-8">
            <section className="w-[46%]">
                <h1 className="text-[70px] font-medium pb-2">
                    We Speak <span className="font-serif italic bg-gradient-to-r from-[#d7ae7d] to-[#9a7a55] inline-block text-transparent bg-clip-text">Skill</span>
                    <br />
                    <p className="-mt-8">
                        Fluently
                    </p>
                </h1>
                <p className="text-[25px] font-medium mb-8">
                    Experience the confidence of working with experts. Every skill you need is mastered and delivered by Industry Leaders.
                </p>
                <h4 className="px-6 py-2 rounded-2xl my-8 bg-[#1c1c1c] w-fit">
                    1000+ Services by Proven Experts.
                </h4>
                <button className="mt-10 bg-white font-semibold text-black text-2xl py-3 px-12 rounded-full">Learn More</button>
            </section>
            <section className="grid grid-cols-2 gap-6">
                <section>
                    <SpeakCards
                        title="Abstract Art"
                        imgSrc="/assets/images/speaks1.png"
                    />
                </section>
                <section className="mt-[200px]">
                    <SpeakCards
                        title="Data Analysis"
                        imgSrc="/assets/images/speaks4.png"
                    />
                </section>
                <section className="-mt-[200px]">
                    <SpeakCards
                        title="3D Design"
                        imgSrc="/assets/images/speaks2.png"
                    />
                </section>
                <section>
                    <SpeakCards
                        title="Graphic Design"
                        imgSrc="/assets/images/speaks5.png"
                    />
                </section>
                <section className="-mt-[200px]">
                    <SpeakCards
                        title="Logo Design"
                        imgSrc="/assets/images/speaks3.png"
                    />
                </section>
                <section>
                    <SpeakCards
                        title="Video Editing"
                        imgSrc="/assets/images/speaks6.png"
                    />
                </section>
            </section>
        </main>
    );
};

export default SpeakSkills;