"use client";

import React, { useState } from "react";
import SettingsHeader from "./SettingsHeader";
import DarkTheme from "../../../public/Assets/Settings_Images/dark_mode.png";
import LightTheme from "../../../public/Assets/Settings_Images/light_mode.jpg";

const ThemePreferences: React.FC = () => {
    const [selectedTheme, setSelectedTheme] = useState<string>("dark");

    const handleThemeSelect = (theme: string) => {
        setSelectedTheme(theme);
    };

    return (
        <main>
            <SettingsHeader
                title="Theme Preferences"
                description="Personalise your experience"
            />

            <section className="w-full mx:ml-8 bg-[#1C1B1A] my-8 sx:my-10 border-2 border-[#252525] rounded-md p-4 sx:p-12 flex flex-col mx:flex-row justify-between">
                <section
                    className={`h-full flex flex-col justify-around cursor-pointer p-3 ${selectedTheme === "dark" ? "border-2 border-blue-600" : ""
                        }`}
                    onClick={() => handleThemeSelect("dark")}
                >
                    <h2 className="font-bold text-xl pb-4 sx:pb-0">
                        Dark Mode (Default)
                    </h2>
                    <h3 className="font-bold text-base mx:text-lg sx:pb-8 mx:py-12 sx:block hidden">
                        Switch things up
                    </h3>
                    <img src={DarkTheme.src} alt="dark_theme" className="mx:w-[430px] mx:h-[276px] w-[276px] h-[168px]" />
                </section>
                <div className="h-12"></div>
                <section
                    className={`h-full flex flex-col justify-around cursor-pointer p-3 ${selectedTheme === "light" ? "border-2 border-blue-600" : ""
                        }`}
                    onClick={() => handleThemeSelect("light")}
                >
                    <h2 className="font-bold text-xl pb-4 sx:pb-0">
                        Light Mode
                    </h2>
                    <h3 className="font-bold text-base mx:text-lg pb-8 mx:py-12 sx:block hidden">
                        Stick to the default
                    </h3>
                    <img src={LightTheme.src} alt="light_theme" className="mx:w-[430px] mx:h-[276px] w-[276px] h-[168px]" />
                </section>
            </section>
        </main>
    );
};

export default ThemePreferences;
