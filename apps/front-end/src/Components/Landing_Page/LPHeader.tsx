import React from "react";

const LPHeader: React.FC = () => {
    return (
        <section className="bg-transparent text-white flex justify-between">
            <header className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="rotate-180 sx:size-8 size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
                <h1 className="flex justify-around min-w-[74px] sx:min-w-[126px] sm:ml-6 ml-4">
                    <img src="/assets/images/Xlancr_logo.svg" alt="Xlancr_logo"
                        className="w-[14.53px] h-[20.93px] sx:w-[24.84px] sx:h-[35.78px]"
                    />
                    <img src="/assets/images/Xlancr_logo_after.svg" alt="Xlancr_logo"
                        className="w-[56.65px] h-[22.55px] sx:w-[96.85px] sx:h-[38.54px]"
                    />
                </h1>
            </header>

            <nav className="flex justify-between items-center">
                <ul className="hidden mx:flex justify-between items-center">
                    <li className="flex justify-between items-center pr-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>

                        <h2 className="text-xl font-medium pl-4">EN</h2>
                    </li>

                    <li className="flex justify-between items-center pr-12">
                        <img src="/assets/images/services.svg" alt="Xlancr_logo" className="w-[15px] h-[15px]" />
                        <h2 className="text-xl font-medium pl-4">Services</h2>
                    </li>
                </ul>

                <ul className="flex justify-between items-center pl-4">
                    <li className="flex justify-between items-center pr-4 sm:pr-8">
                        <h2 className="text-[10.48px] sx:text-xl font-semibold pl-4">Login</h2>
                    </li>

                    <li className="flex justify-between items-center px-4 sm:px-6 bg-white text-black rounded-full py-2">
                        <h2 className="text-[10.48px] sx:text-xl font-semibold">Sign up</h2>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default LPHeader;
