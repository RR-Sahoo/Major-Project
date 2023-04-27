import React, { useState } from "react";
import { Img, Button } from "components";
import AgentProfileAbout from "./AgentProfileAbout";
import AgentProfileReview from "./AgentProfileReview";
import AgentPropertyListing from "./AgentPropertyListing";

function TabButton({ label, active, onClick }) {
  return (
    <button
      className={`border border-gray-600 border-solid cursor-pointer flex-1 font-semibold sm:px-5 px-[30px] py-3.5 rounded-[10px] text-base text-center ${
        active ? "text-white_A700 bg-gray-900" : "text-gray-900"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const AgentTabSection = ({ agent }) => {
  const [activeTab, setActiveTab] = useState("rent");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabSections = [
    // {
    //   tab: "rent",
    //   component: <AgentPropertyListing />,
    // },
    // {
    //   tab: "sale",
    //   component: <AgentPropertyListing />,
    // },
    {
      tab: "about",
      component: <AgentProfileAbout agent={agent} />,
    },
    {
      tab: "review",
      component: <AgentProfileReview />,
    },
  ];

  return (
    <div className="flex items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
          {tabSections.map(({ tab, component }) => (
            <TabButton
              key={tab}
              label={tab.charAt(0).toUpperCase() + tab.slice(1)}
              active={activeTab === tab}
              onClick={() => handleTabClick(tab)}
            />
          ))}
        </div>
        <div
          className="w-full relative"
          style={{ height: "0", paddingBottom: "56.25%" }}
        >
          {tabSections.map(({ tab, component }) => (
            <div
              key={tab}
              className="absolute top-0 left-0 w-full h-full"
              style={{
                opacity: activeTab === tab ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                pointerEvents: activeTab === tab ? "auto" : "none",
              }}
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentTabSection;
