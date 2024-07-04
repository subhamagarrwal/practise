import React from "react";

interface JobHeaderProps {
  logoSrc: string;
  teamName: string;
  jobTitle: string;
  postedTime: string;
}

const JobHeader: React.FC<JobHeaderProps> = ({ logoSrc, teamName, jobTitle, postedTime }) => {
  return (
    <div className="flex items-center w-[838px] p-4 mt-4 text-white justify-between">
      <img src={logoSrc} alt="Company Logo" className="rounded-full w-32 h-32 p-6 bg-white" />
      <div className="flex flex-col flex-wrap">
        <h2 className="text-2xl font-semibold mb-9">Join {teamName} Team as</h2>
        <h1 className="text-[40px] font-black">{jobTitle}</h1>
      </div>
      <span className="text-gray-400 self-end">Posted {postedTime} ago</span>
    </div>
  );
};

export default JobHeader;
