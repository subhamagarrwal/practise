import React from 'react';

type CollabCardProps = {
  imageSrc: string;
  altText: string;
  headingText: string;
};

const CollabCard: React.FC<CollabCardProps> = ({ imageSrc, altText, headingText }) => {
  return (
    <main className='min-w-1/4 w-full h-full min-h-[398px] p-8 bg-gradient-to-r from-[#151515] to-[#1c1c1c] rounded-xl border-2 border-[#ac8960] flex flex-col justify-between'>
        <img src={imageSrc} alt={altText} />
        <h3 className='font-normal text-2xl text-center'>{headingText}</h3>
    </main>
  );
};

export default CollabCard;