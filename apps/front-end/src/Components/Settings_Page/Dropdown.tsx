"use client";

import React, { useState } from "react";

const Dropdown: React.FC<{ onSelect: (page: string) => void }> = ({ onSelect }) => {
    const [selected, setSelected] = useState<string>("Notification");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClick = (item: string) => {
        setSelected(item);
        onSelect(item);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-mdshadow-sm px-4 py-2 bg-[#1e1e1e] text-sm font-medium text-white hover:bg-[#252525] rounded-lg focus:outline-none"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                >
                    {selected}
                    <svg
                        className="ml-2 -mr-1 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.25 4.27a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute left-0 right-0 mt-2 w-56 rounded-md shadow-lg bg-[#252525] ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <ul className="py-1" role="none">
                        {buttons.map((button, index) => (
                            <li key={index} className="text-gray-300">
                                <button
                                    className={`block px-4 py-2 font-semibold text-lg text-left w-full`}
                                    role="menuitem"
                                    onClick={() => handleClick(button)}
                                >
                                    {button}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
