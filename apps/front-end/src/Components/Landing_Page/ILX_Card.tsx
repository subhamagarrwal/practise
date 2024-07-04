import React from 'react';

interface ILXCardProps {
  img_src: string;
  name: string;
  username: string;
  icon_src: string;
  content: string;
}

const ILXCard: React.FC<ILXCardProps> = ({ img_src, name, username, icon_src, content }) => {
  return (
    <div className="bg-[#151515] border-2 border-[#AC8960] p-8 px-6 rounded-2xl mx:w-full h-full mx:m-0 m-2 mb-6 sx:mb-0 sm:min-w-[270px] overflow-hidden">
      <div className="flex items-center pb-2">
        <img src={img_src} alt="Profile" className="w-12 h-12 rounded-full" />
        <div className="ml-4 flex-grow">
          <div className="text-white font-bold">{name}</div>
          <div className="text-[#4C4C4C]">@{username}</div>
        </div>
        <img src={icon_src} alt="Icon" className="h-8" />
      </div>
      <div className="mt-4 text-white overflow-hidden">
        {content.split('\n').map((text, index) => (
          <React.Fragment key={index}>
            {text}
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ILXCard;
