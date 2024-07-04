import React from "react";
import StarImage from '../../../public/assets/images/star.png';
import MemberImage from '../../../public/assets/images/member.png';

interface JobSideBarProps {
    price: number;
    currency: string;
    completionText: string;
    duration: string;
    clientRating: number;
    isVerified: boolean;
    memberSince: number;
}

const JobSideBar: React.FC<JobSideBarProps> = ({
    price,
    currency,
    completionText,
    duration,
    clientRating,
    isVerified,
    memberSince
}) => {
    return (
        <div className="p-8 pl-8 pt-16 mb-7 ml-8 w-72 flex flex-col">
            <div className="font-semibold mb-6">
                <h3>
                    <span className="text-[40px]">${price}</span>
                    &nbsp;
                    <span className="text-xl">{currency}</span>
                </h3>
                <p className="text-lg">{completionText}</p>
            </div>
            <div className="font-semibold text-lg mb-6">
                <div className="flex">
                    <p>$</p>
                    <p className="mb-2 ml-4">Fixed Price</p>
                </div>
                <div className="flex">
                    <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    </svg>
                    <p className="mb-2 ml-2">{duration}</p>
                </div>
            </div>
            <div>
                <h4 className="text-xl font-extrabold mb-1">Client Info</h4>
                <div className="flex">
                    <img src={StarImage.src} className="w-5 h-6 mt-0.5" alt="star" />
                    <p className="mb-2 ml-3">{clientRating} / 5.0</p>
                </div>
                <div className="flex">
                    <svg className="w-4 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                    </svg>
                    <p className="mb-2 ml-3">{isVerified ? 'Verified Account' : 'Not Verified'}</p>
                </div>
                <div className="flex">
                    <img src={MemberImage.src} className="w-5 h-6" alt="member" />
                    <p className="ml-3">Member since {memberSince}</p>
                </div>
            </div>
        </div>
    );
};

export default JobSideBar;
