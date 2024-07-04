import React from 'react';
import GroupImage from '../../../public/assets/images/project.png'; // Import the Group image
import BellIcon from '../../../public/assets/images/bell-icon.png'; // Import the bell icon image
import UserIcon from '../../../public/assets/images/user-icon.png'; // Import the user icon image
import UserPic from '../../../public/assets/images/ellipse.png';

type Project = {
  name: string;
  location: string;
  title: string;
  description: string;
  skills: string[];
};

const projects: Project[] = Array(6).fill({
  name: "Gagan N Bangaragiri",
  location: "Bangalore, India",
  title: "Applying for Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, aut repellat temporibus rem cumque sapiente non amet veniam cum",
  skills: ["Javascript", "React", "CSS"]
});

const skillStyles: { [key: string]: React.CSSProperties } = {
  "React": { border: "1px solid #FFB800", color: "#FFB800", backgroundColor: "#ffb80033" },
  "Javascript": { border: "1px solid #03DAC5", color: "#03DAC5", backgroundColor: "#03dac530" },
  "CSS": { border: "1px solid #8993F3", color: "#8993F3", backgroundColor: "#0e25ff33" },
};

const IncomingProjects: React.FC = () => {
  return (
    <div className="bg-[#171717] min-h-screen p-8">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center bg-[#090A10] p-4 rounded-lg mb-8">
        <div>
          {/* This div can be used for left-aligned items if needed */}
        </div>
        <div className="flex items-center">
          <img src={BellIcon.src} alt="Bell Icon" className="w-6 h-6 mr-4" />
          <img src={UserIcon.src} alt="User Icon" className="w-6 h-6 rounded-full mr-2" />
          <span className="text-white">Name goes here</span>
        </div>
      </div>

      {/* Incoming Projects Section */}
      <div className="flex items-center mb-8">
        <img src={GroupImage.src} alt="Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold text-white">Incoming Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#2C2C2C] text-white p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <img src={UserPic.src} alt="User Icon" className="w-12 h-12 rounded-full mr-2" />
              <div>
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-400">{project.location}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={skillStyles[skill]}>
                  <span style={{ ...skillStyles[skill], border: "none", background: "none" }}>✓</span>{skill}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="bg-white text-black py-2 px-4 rounded">Hire Freelancer</button>
              <button className="bg-transparent border border-white text-white py-2 px-4 rounded">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncomingProjects;
