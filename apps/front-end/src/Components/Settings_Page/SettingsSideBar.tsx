"use client";

import React, { useState } from "react";

const SettingsSideBar: React.FC<{ onSelect: (page: string) => void }> = ({ onSelect }) => {
    const [selected, setSelected] = useState<string>("Notification");

    const handleClick = (item: string) => {
        setSelected(item);
        onSelect(item);
    };

    const buttons = [
        "General Details",
        "User Permission",
        "Billing",
        "Plans",
        "Notification",
        "Theme Preferences",
        "Language",
    ];

    return (
        <ul>
            {buttons.map((button, index) => (
                <li key={index}>
                    <button
                        className={`w-full sx:min-w-[133px] mx:min-w-[172px] ${
                            selected === button ? "bg-[#1e1e1e]" : "hover:bg-[#1e1e1e]"
                        } font-medium mx:font-semibold text-sm mx:text-lg py-3 flex mx:pl-0`}
                        onClick={() => handleClick(button)}
                    >
                        {button}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SettingsSideBar;
