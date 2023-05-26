import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import ContactUs from "../contactus/page";
import Banner from "../components/Banner";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={() => handleTabClick("tab1")}
        >
          Tab 1
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={() => handleTabClick("tab2")}
        >
          Tab 2
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "tab1" && "XYZ"}
        {activeTab === "tab2" && <Banner />}
      </div>
    </div>
  );
};

export default Tab;
