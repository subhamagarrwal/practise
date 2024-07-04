const Collab2=()=>{
    return(
        <>
        {/* first row */}
         <div className="grid 
         lp:grid-cols-3 mx:grid-cols-2 lp:gap-[3vw] lp:p-[3vw]
         xs:grid-cols-2 sx:mx:gap-[5vw] sx:max-lp:py-[3vh]
         xs:max-sx:p-[2vw] sx:max-mx:mb-[vh] mx:max-lp:mb-[vh]">

            <div className="bg-[#000000] lp:w-[45vw]
                w-[50vw] xs:max-lp:relative xs:max-lp:left-[9vw] sx:max-lp:mb-[10vh]">
                
                <p className="xs:text-[4.5vw] xs:h-[12vh]
                 lp:text-[3.6vw] 
                 text-[3.5vw] xs:max-mx:mb-[2vh] ">All your freelance tasks consolidated 
                    <br /> into <strong className="text-gradient2"><i>a single platform</i></strong></p>
            </div>
            <div className="bg-black lp:hidden w-[5px] "> </div>

            <button className="flex flex-col justify-center 
            items-center relative 
            px-[4vw] ml-[9vw] bg-[#181818] lp:w-[30vw] lp:h-[45vh]
            sx:max-lp:h-[30vh] sx:max-lp:w-[40vw]
            xs:max-sx:h-[6vh] xs:max-sx:left-[2vw]
            sx:max-mx:right-[2vw] min-w-[140px] min-h-[120px]
            ">

                <img className="" src="/assets/images/sendinvoices.png" alt="" width={"250vw"}/>
                <p className="text-[2vw] ">Send Invoices</p>
            </button>
            
            <button className="flex flex-col justify-center items-center 
            bg-[#181818] 
            px-5
            ml-[9.5vw] sx:max-lp:ml-5 sx:max-lp:w-[30vw]
            lp:w-[18vw] lp:h-[45vh] mx:max-lp:w-[30vw] mx:max-lp:h-[30vh]
            min-w-[100px] min-h-[10vh]
             xs:max-sx:w-[10vw]
            ">
                <img src="/assets/images/signature.png" alt="" />
                <p className="text-[1.5vw] mt-[3vh]">Sign Signatures</p>
            </button>
        </div>
        {/* second row */}

        <div className="grid grid-cols-3 gap-[2vw] px-[3vw]">
            <button className="flex flex-col justify-center items-center>
             p-[1vw] text-center bg-[#181818] w-[33vw] h-[50vh]
             xs:max-lp:relative 
             mx:max-lp:top-[28vh] 
             mx:max-lp:left-[9vw] sx:max-mx:top-[20vh] 
              sx:max-mx:left-[5vw]  
              mx:max-lp:h-[35vh] sx:max-mx:h-[25vh]
              
              xs:max-sx:w-[30vw] xs:max-sx:h-[10vh]
              xs:max-sx:top-[12vh] xs:max-sx:ml-[10vw]" >
                <img src="/assets/images/newwebsite.png" alt="" />
                <p className="ml-[10vw] text-[1.5vw]">Easy Workplace</p>
            </button>
        {/* find jobs and Explore Benifits */}
            <div className="grid lp:grid-rows-2 gap-[5vh] ml-[3vw] 
            sx:max-lp:grid-cols-2 sx:max-lp:relative mx:max-lp:right-[32vw]
            stb:max-mx:gap-[17vw] sx:max-stb:gap-[17vw] sx:max-mx:bottom-[8vh] sx:max-mx:right-[37vw]
            mx:max-lp:relative mx:max-lp:top-[2vw] mx:max-lp:gap-[25vw]
            sx:grid-rows-2 sx:bottom-[8vh]
            
            xs:max-sx:gap-[1vh] xs:max-sx:-ml-[5rem] ">
                
                <button className=" flex flex-col items-center justify-center
                 bg-[#181818] w-[16vw] sx:max-lp:relative
                 mx:max-lp:w-[19vw] mx:max-lp:h-[23vh] 
                 sx:max-mx:w-[16vw] sx:max-mx:h-[15vh] 
                   sx:max-mx:top-[8vh] sx:max-mx:left-[5vw]
                    xs:max-sx:w-[17vw] xs:max-sx:h-[10vh] xs:max-sx:p-[.5vh]">
                    <img src="/assets/images/shoppingicon.svg" alt="" width={"85vw"}  />
                    <p className="text-[1.5vw] mb-[1.5vh]">Find Jobs</p>
                </button>
                
                <button className="px-[2vw] flex flex-col items-center justify-center
                 bg-[#181818] w-[16vw] h-[29vh] xs:max-lg:relative
                 sx:max-mx:w-[16vw] sx:max-mx:h-[15vh]  sx:max-mx:top-[8vh]
                 mx:max-lp:w-[18vw] mx:max-lp:h-[23vh] mx:max-lp:pb-[2vw]
                  sx:max-mx:left-[1vw]  sx:max-mx:p-[3vw]
                  xs:max-sx:w-[17vw] xs:max-sx:h-[10vh] xs:max-sx:top-[10vh]
                  xs:max-sx:left-[10vw] ">
                    <img src="/assets/images/shoppingicon.svg" alt="" width={"vw"} />
                    <p className="text-[1.5vw] w-[12vw]">Explore Benifits</p>
                </button>

            </div>
            {/* manage payments and access payments */}

            <div className="text-center flex flex-row space-x-[1vw] 
            sx:relative lp:right-[11vw] w-[39vw]
            sx:max-lp:flex-col sx:max-lp:space-y-[3vh] 
             sx:max-lp:relative sx:max-lp:right-[5vw]
             xs:max-sx:grid xs:max-sx:grid-rows-2 
             xs:max-sx:relative xs:max-sx:right-[15vw]
            ">
                {/* manage projects */}
                <button className="bg-[#181818] text-center
                lp:w-[40vw] lp:h-[40vh] 
                mx:max-lp:w-[31vw] mx:max-lp:h-[24vh] sx:max-mx:h-[26vh]
                xs:max-lp:relative sx:right-[2vw]
                mx:max-lp:bottom-[vh] mx:max-lp:right-[8vw] 
                sx:max-mx:w-[35vw] sx:max-lp:right-[13vw]
                
                xs:max-sx:w-[35vw] xs:max-sx:h-[15vh] 
                xs:max-sx:right-[vh] xs:max-sx:top-[vh]
                ">
                <img src="/assets/images/newwebsite.png" alt="" />
                <p className="text-[1.5vw] mb-[1vh]">Manage Projects</p>
                </button>

                {/* access payments */}
                <button className="flex flex-col text-center justify-center items-center
                 bg-[#181818]
                  p-[3vw] relative 
                  lp:w-[30vw] lp:h-[30vh] 
                  mx:max-lp:w-[32vw] mx:max-lp:h-[35vh] mx:max-lp:right-[10vw]
                  mx:max-lp:top-[1vh]
                  sx:max-mx:w-[35vw] sx:max-mx:h-[25vh] sx:max-mx:right-[14vw]
                  xs:max-sx:w-[35vw] xs:max-sx:h-[15vh] 
                  xs:max-sx:right-[5vw] xs:max-sx:top-[5vh]">
                    <img src="/assets/images/acceptpayments.png" height={"5vh"} alt="" />
                    <p className="text-[1.3vw] lp:ml-[1vw] 
                    mx:max-lp
                     ">Access Payments</p>
                </button>
        </div>

      </div></>
       
    )
}
export default Collab2;