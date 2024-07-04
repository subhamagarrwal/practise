'use client';

import { DatePickerDemo } from "../ui/DatePickerDemo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Bubble from "./Bubble";




import React, { useState } from 'react';


const Card = () => {
  const [count, setCount] = useState(0);
  const [selectedSalaryType, setSelectedSalaryType] = useState('');

  const handleRadioChange = (e:any) => {
    setSelectedSalaryType(e.target.value);
  };

  return (
    
    <div className='bg-black rounded-md mt-4 p-4 md:p-8'>
      <div className='flex'>
        <h1 className='mt-4 sm:mt-[30px] md:mt-[50px] text-[20px] sm:text-[25px] md:text-[30px] font-bold'>Connect with Skilled Freelancers: Post Your <span style={{ color: "#866A4A" }}>Job!</span></h1>
      </div>
      
      <div className='flex flex-col '>
        <div className='flex flex-col lg:flex-row '>
          <div className='lg:w-1/2 mr-[100px]'>
            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Job Title
            </div>
            <form>
              <input type='text' placeholder='A job title must describe one position only.' className='bg-[#1B1B1A73] w-full h-[40px] mt-2 rounded-md placeholder-[#38342F]'></input>
            </form>

            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Job Description
            </div>
            <form>
              <textarea onChange={e => setCount(e.target.value.length)} maxLength={200} placeholder='Provide a short description about the job' className='bg-[#1B1B1A73] w-full h-[200px] mt-2 rounded-md placeholder-[#38342F]'></textarea>
              <div className='text-[13px] ml-auto'>
                <span>{count}</span>
                <span>/200</span>
              </div>
            </form>

            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Skills Required
            </div>
            <form>
              <input type='text' placeholder='Add skills that are preferred for the project.' className='bg-[#1B1B1A73] w-full h-[40px] mt-2 rounded-md placeholder-[#38342F]'></input>
            </form>
            
            <Bubble text='hellohellohellohellohello' />
            <Bubble text='hellohellohellohellohello' />
            <Bubble text='hellohellohellohellohello' />

            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Attachments
            </div>
            <form>
              <Input type='file' className='bg-[#1B1B1A73] w-full h-[40px] mt-2 rounded-md mb-10' />
            
            </form>

          </div>

          {/* RIGHT START */}
          <div className='lg:w-1/2 lg:ml-0 mt-4 sm:mt-0'>
            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Salary
            </div>
            <form>
              <div className='flex flex-col sm:flex-row'>
                <div className={`bg-[#1B1B1A73] h-[170px] w-full sm:w-[48%] rounded-md mt-2 border ${selectedSalaryType === 'hourly' ? 'border-[#D7AE7D]' : 'border-transparent'}`}>
                  <input type='radio' className='ml-5 mt-3 custom-radio' name='salaryType' value='hourly' onChange={handleRadioChange}></input>
                  <h1 className={`font-bold text-[20px] sm:text-[22px] md:text-[25px] ml-[20px] ${selectedSalaryType === 'hourly' ? 'text-[#D7AE7D]' : 'text-[#38342F]'}`}>Hourly</h1>
                  <p className={`ml-[20px] mt-3 text-sm ${selectedSalaryType === 'hourly' ? 'text-[#d7ae7d]' : 'text-[#38342F]'}`}>This is ideal for projects with clearly defined scopes and deliverables.</p>
                </div>

                <div className={`bg-[#1B1B1A73] h-[170px] w-full sm:w-[48%] rounded-md mt-2 sm:ml-4 border ${selectedSalaryType === 'fixed' ? 'border-[#D7AE7D]' : 'border-transparent'}`}>
                  <input type='radio' className='ml-5 mt-3 custom-radio' name='salaryType' value='fixed' onChange={handleRadioChange}></input>
                  <h1 className={`font-bold text-[20px] sm:text-[22px] md:text-[25px] ml-[20px] ${selectedSalaryType === 'fixed' ? 'text-[#D7AE7D]' : 'text-[#38342F]'}`}>Fixed Price</h1>
                  <p className={`ml-[20px] mt-3 text-sm ${selectedSalaryType === 'fixed' ? 'text-[#D7AE7D]' : 'text-[#38342F]'}`}>This is suitable for projects that require ongoing work, have flexible requirements, or are not fully defined in scope.</p>
                </div>
              </div>
            </form>
            <div className='flex flex-col md:flex-row'>

              <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px] w-full md:w-1/2'>
                Hourly Rate Range
                <form>
                  <input type='text' placeholder='₹2000' className='bg-[#1B1B1A73] w-full h-[40px] mt-2 rounded-md placeholder-[#38342F]'></input>
                </form>
              </div>

              <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px] w-full md:w-1/2 md:ml-4'>
                Budget
                <form>
                  <input type='text' placeholder='₹20000' className='bg-[#1B1B1A73] w-full h-[40px] mt-2 rounded-md placeholder-[#38342F]'></input>
                </form>
              </div>

            </div>

            <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
              Experience Level
              <form>
                <div className='flex justify-between mt-2'>

                  <div>
                    <input type='radio' name="ex" className='mr-3 custom-radio'></input>
                    <label>Beginner</label>
                  </div>

                  <div>
                    <input type='radio' name="ex" className='mr-3 custom-radio'></input>
                    <label>Intermediate</label>
                  </div>

                  <div>
                    <input type='radio' name="ex" className='mr-3 custom-radio'></input>
                    <label>Expert</label>
                  </div>

                </div>

              </form>
              <div className='text-[16px] sm:text-[18px] md:text-[20px] font-bold mt-4 sm:mt-[20px] md:mt-[34px]'>
                Project Duration
              </div>
              <div className='mt-2 flex flex-col sm:flex-row'>
                <div className='mr-4'><DatePickerDemo /></div>
                <div className='mt-2 sm:mt-0'><DatePickerDemo /></div>
              </div>
            </div>
          </div>
          {/* RIGHT END */}
        </div>
        <div className='flex flex-col items-center sm:mt-4 mobile-button-spacing'>
          <Button variant="outline" className='border-[#494745] mb-4 w-[90%] sm:w-[80%] md:w-[464px] h-[60px]'>Save Draft</Button>
          <Button variant="outline" className='border-[#D7AE7D] bg-[hsl(33,53%,2%)] w-[90%] sm:w-[80%] md:w-[464px] h-[60px]'>Submit</Button>
        </div>
      </div>

      <style jsx>{`
        .custom-radio {
          appearance: none;
          border: 2px solid #D7AE7D;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          outline: none;
          cursor: pointer;
          position: relative;
          background-color: transparent;
        }

        .custom-radio:checked {
          background-color: #fff;
        }

        .custom-radio:before {
          content: '';
          display: block;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        .custom-radio:checked:before {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .mobile-button-spacing {
            margin-top: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
