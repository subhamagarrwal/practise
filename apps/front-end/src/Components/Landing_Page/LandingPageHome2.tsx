import React from "react";
import LPFooter from "./LPFooter";
import LPHeader from "./LPHeader";

const LandingPageHome: React.FC = () => {
    return (
        <main className="min-h-screen bg-cover bg-center text-white p-6 py-10 mx:p-12 mx:pt-10 flex flex-col justify-between items-center"
            style={{
                backgroundImage: "url('/assets/images/freelancerHome.png')", // image changed
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "sticky",
                top: 0,
                width: "100%",
                height: "100%",
            }}>
            <section className="w-full">
                <LPHeader />
                <section className="mx:hidden px-8 py-10 hidden sx:block">
                    <h2 className="font-semibold text-[55.35px]">For any job hire skilled freelancers remotely</h2>
                </section>
                <section className="sx:hidden pl-4 py-10">
                    <h2 className="font-semibold text-[32px]">
                        Hello Samhitha,<br />
                        It’s great to see you again.
                    </h2>
                </section>
            </section>
            <section className="sx:self-start mx:self-end min-w-[250px] sx:min-w-[425px] mx:min-w-[450px] w-2/6">
                <LPFooter />
            </section>
        </main>
    );
};

export default LandingPageHome;
