import React from "react";

interface JobAdditionalDetailsProps {
  yearExperience: string;
  workingType: string;
  location: string;
  workingHours: string;
  projectDuration: string;
  requiredSkills: string[];
}

const JobAdditionalDetails: React.FC<JobAdditionalDetailsProps> = ({
  yearExperience,
  workingType,
  location,
  workingHours,
  projectDuration,
  requiredSkills,
}) => {
  return (
    <div className="bg-[#1e1e1e] text-white rounded-3xl p-8 mt-8 flex flex-col space-y-6">
      <div className="flex justify-around w-full">
        <div className="flex flex-col items-center space-y-8">
          <h4 className="text-lg font-light">Year Experience</h4>
          <p className="text-lg font-medium">{yearExperience}</p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h4 className="text-lg font-light">Working Type</h4>
          <p className="text-lg font-medium">{workingType}</p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h4 className="text-lg font-light">Location Based</h4>
          <p className="text-lg font-medium">{location}</p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h4 className="text-lg font-light">Working Hours</h4>
          <p className="text-lg font-medium">{workingHours}</p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <h4 className="text-lg font-light">Project Duration</h4>
          <p className="text-lg font-medium">{projectDuration}</p>
        </div>
      </div>
      <div className="flex w-full pl-12">
        <h4 className="h-[44px] w-[73px] text-lg font-light">Required Skills :</h4>
        <div className="flex flex-wrap gap-4 mt-2 pl-4 flex w-full justify-around">
          {requiredSkills.map((skill, index) => (
            <span key={index} className="px-8 py-2 bg-gray-700 rounded-full font-normal text-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobAdditionalDetails;
