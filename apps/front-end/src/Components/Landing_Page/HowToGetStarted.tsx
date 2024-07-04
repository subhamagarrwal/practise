const HowToGetStarted = () => {
    return (
        <div className="text-white my-[5vh]  mx:max-lp:px-[10vw]  bg-black xs:max-mx:hidden
        ">
            <div className="flex flex-row lp:space-x-[20vw] justify-center
            mx:max-lp:px-[rem] ">

                <div className="grid grid-cols-2 lp:p-[3vw] mx:max-lp:p-[vw]">
                                    {/* How to get started */}
                <div className="w-[24rem]  flex flex-col space-y-[3rem] justify-start 
                mx:max-lp:relative mx:max-lp:right-[2vw]">
                <p className=" w-[30rem] mx:nax-lp:w-[20vw] text-[3.5vw] px-[rem] ">
                How to get<br />started at<br /><strong className="text-gradient">Xlancr</strong>
                </p>
                <p className="text-gradient1 text-[1.5rem] w-[30rem] ">A diverse freelance marketplace</p>
                <button className="bg-white p-3 rounded-full text-black w-[13rem]">Get Demo</button>
                </div>

                {/*ADDING IMAGE*/}
                <img src="/assets/images/vidimg.png" alt="section1" className="-mx-[vw] hover:opacity-60 mx:max-lp:w-[28rem]" />
                </div>

            </div>

        </div>
    );
}

export default HowToGetStarted;