"use client";

import React, { useState } from "react";

import Sidebar from '@web/Components/Dashboard/Sidebar';
import Header from '@web/Components/Dashboard/Header';
import SettingsSideBar from '@web/Components/Settings_Page/SettingsSideBar';
import GeneralDetails from "@web/Components/Settings_Page/GeneralDetails";
import UserPermission from "@web/Components/Settings_Page/UserPermission";
import Billing from "@web/Components/Settings_Page/Billing";
import Plans from "@web/Components/Settings_Page/Plans";
import Notification from "@web/Components/Settings_Page/Notification";
import ThemePreferences from "@web/Components/Settings_Page/ThemePreferences";
import Language from "@web/Components/Settings_Page/Language";
import Dropdown from "@web/Components/Settings_Page/Dropdown";

const Settings: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("Notification");

  const renderContent = () => {
    switch (selectedPage) {
      case "General Details":
        return <GeneralDetails />;
      case "User Permission":
        return <UserPermission />;
      case "Billing":
        return <Billing />;
      case "Plans":
        return <Plans />;
      case "Notification":
        return <Notification />;
      case "Theme Preferences":
        return <ThemePreferences />;
      case "Language":
        return <Language />;
      default:
        return <Notification />;
    }
  };

  return (
    <div className="bg-[#1e1e1e] min-h-screen text-white pb-12 flex relative">
      {/* Sidebar */}
      <div className="fixed top-0 left-2 hidden mx:block">
        <Sidebar />
      </div>

      <div className="sx:p-4 mx:pl-24 w-full">
        {/* Header Component */}
        <header className="p-4 pt-8 sx:pt-10">
          <Header />
        </header>

        {/* Dropdown for Phone */}
        <nav className="sx:hidden block px-8 bg-[#000] text-white rounded-xl p-4 mx-4">
          <Dropdown onSelect={setSelectedPage} />
        </nav>

        {/* Job Description */}
        <main className="bg-[#000] text-white rounded-3xl rounded-3xl m-4 mb-0 p-6 mx:p-8 ">
          <h1 className='text-2xl mx:text-3xl font-semibold w-full pb-6 mx:h-20 border-b-2 border-[#1e1e1e] sx:block hidden'>Settings</h1>

          <section className="flex">
            {/* Settings Sidebar */}
            <nav className='h-full w-[40%] sx:min-w-[133px] mx:min-w-[172px] mx:w-[20%] pt-4 sx:block hidden'>
              <SettingsSideBar onSelect={setSelectedPage} />
            </nav>

            {/* Settings Main */}
            <section className="flex-grow p-4 pr-0 sx:pr-4 border-l-2 border-[#1e1e1e]">
              {renderContent()}
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Settings;