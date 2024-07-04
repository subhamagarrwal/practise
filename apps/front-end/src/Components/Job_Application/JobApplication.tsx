"use client";
import React, { useState } from 'react';

const JobApplication: React.FC = () => {
    const [jobProfile, setJobProfile] = useState<string>('');
    const [bidPrice, setBidPrice] = useState<string>('');
    const [estimatedDuration, setEstimatedDuration] = useState<string>('');
    const [portfolioLink, setPortfolioLink] = useState<string>('');
    const [shareProfile, setShareProfile] = useState<boolean>(false);
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Form Submission Logic
    };

    return (
        <form onSubmit={handleSubmit} className="bg-black text-white p-8 rounded-lg w-[80%] pr-16">
            <h2 className="font-semibold text-2xl mb-4">How are you fit for this job?</h2>
            <div className="mb-8">
                <textarea
                    className="w-full bg-[#1e1e1e] text-white p-4 rounded-2xl"
                    rows={4}
                    placeholder="Enter your response here..."
                    value={jobProfile}
                    onChange={(e) => setJobProfile(e.target.value)}
                />
            </div>
            <div className="flex mb-8">
                <div className="flex flex-col mr-16">
                    <label htmlFor="bidPrice" className="font-semibold text-2xl mb-4">
                        Bid Price
                    </label>
                    <div className='flex'>
                        <span className='w-15 h-full rounded-l-lg bg-gray-500 p-4 py-[20px] pb-[24px] text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                        <input
                            type="number"
                            id="bidPrice"
                            value={bidPrice}
                            onChange={(e) => setBidPrice(e.target.value)}
                            className="bg-[#1e1e1e] text-white p-4 rounded-r-lg w-65"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="estimatedDuration" className="font-semibold text-2xl mb-4">
                        Estimated duration of work
                    </label>
                    <div className='flex'>
                        <span className='w-15 h-full rounded-l-lg bg-gray-500 p-4 py-[20px] pb-[24px] text-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            id="estimatedDuration"
                            value={estimatedDuration}
                            onChange={(e) => setEstimatedDuration(e.target.value)}
                            className="bg-[#1e1e1e] text-white p-4 rounded-r-lg w-80"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-6 flex flex-col">
                <label htmlFor="portfolioLink" className="font-semibold text-2xl mb-4">
                    Upload a link to your Portfolio / Github
                </label>
                <div className='flex'>
                    <span className='w-15 h-full rounded-l-lg bg-gray-500 p-4 py-[20px] pb-[24px] text-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        id="portfolioLink"
                        value={portfolioLink}
                        onChange={(e) => setPortfolioLink(e.target.value)}
                        className="w-[70%] bg-[#1e1e1e] text-white p-4 rounded-r-lg"
                    />
                </div>
            </div>
            <div className="mb-6 mt-10 flex flex-col">
                <div className='font-semibold text-2xl mb-4'>
                    Allow Xlancr to share your Profile to "XYZ Company"?
                </div>
                <div className='flex my-2 mb-6'>
                    <div>
                        <input
                            type="radio"
                            id="yesShareProfile"
                            checked={shareProfile}
                            onChange={(e) => setShareProfile(e.target.checked)}
                            className="mr-2 h-5 w-5"
                            name='profileShare'
                        />
                        <label htmlFor="yesShareProfile" className='font-medium text-2xl'>Yes</label>
                    </div>
                    <div className='ml-32'>
                        <input
                            type="radio"
                            id="noShareProfile"
                            checked={shareProfile}
                            onChange={(e) => setShareProfile(e.target.checked)}
                            name='profileShare'
                            className="mr-2 h-5 w-5"
                        />
                        <label htmlFor="noShareProfile" className='font-medium text-2xl'>No</label>
                    </div>
                </div>
            </div>
            <div className="mb-6 flex items-center">
                <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mr-2 h-4 w-4"
                />
                <label htmlFor="agreeTerms" className="text-xl font-normal">
                    All the details provided are correct and I am liable for any false information.
                </label>
            </div>
            <div className='w-full flex justify-center'>
                <button
                    type="submit"
                    className="bg-[#1e1e1e] text-white py-3 px-12 rounded-full hover:bg-blue-600 transition-colors duration-300 mt-12"
                >
                    Submit Application
                </button>
            </div>
        </form>
    );
};

export default JobApplication;