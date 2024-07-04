import React from "react";

interface SettingsHeaderProps {
    title: string;
    description: string;
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({ title, description }) => {
    return (
        <header className="mx:pl-8 pb-2 mx:pb-4 w-full border-b-2 border-[#1e1e1e]">
            <h1 className="mx:pb-1 font-semibold text-xl mx:text-4xl -mt-3 sx:mt-0">
                {title}
            </h1>
            <p className="text-sm mx:text-lg font-normal mx:pb-1 sx:block hidden">
                {description}
            </p>
        </header>
    );
};

export default SettingsHeader;
