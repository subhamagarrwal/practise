import React from "react";
import CollabCard from "./Collab_Card";

const Collab: React.FC = () => {
    return (
        <main className="min-h-screen bg-cover bg-center text-white">
            <h2 className="font-medium text-[56px] text-center -mb-6">
                A single Platform for Seamless
            </h2>
            <h2 className="font-serif italic bg-gradient-to-r from-[#d7ae7d] to-[#9a7a55] text-transparent bg-clip-text font-medium text-[56px] text-center pb-2">
                Freelance Collaboration
            </h2>
            <section className="pt-12 flex w-full justify-around items-center px-8">
                <section className="w-1/3 p-8">
                    <CollabCard
                        imageSrc="/assets/images/Collab_ProjectManagement.svg"
                        altText="Effortless Project Management"
                        headingText="Effortless Project Management"
                    />
                </section>
                <section className='w-[470px] min-w-1/3 h-[500px] min-h-[398px] p-8 bg-gradient-to-r from-[#151515] to-[#1c1c1c] rounded-xl border-2 border-[#ac8960] flex flex-col justify-between'>
                    <article className="flex justify-center items-center" style={{
                        backgroundImage: "url('/assets/images/Collab_Services_Bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "75%",
                    }}>
                        <img src='/assets/images/Collab_Services.svg' alt="Services" />
                    </article>
                    <h3 className='font-normal text-3xl text-center'>1000+ services</h3>
                </section>
                <section className="w-1/3 p-8">
                    <CollabCard
                        imageSrc="/assets/images/Collab_Commission.png"
                        altText="Low commission"
                        headingText="Low commission"
                    />
                </section>
            </section>
        </main>
    );
};

export default Collab;
