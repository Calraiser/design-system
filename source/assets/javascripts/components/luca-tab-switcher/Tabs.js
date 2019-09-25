import React from "react";
import Tab from "./Tab";

const Tabs = ({ activeTabIndex, data, handleTabClick }) => (
  <div>
    {data.map(({ label, id }, index) => {
      const isActive = activeTabIndex === index;
      return (
        <Tab
          key={index}
          label={label}
          isActive={isActive}
          handleTabClick={handleTabClick}
          tabIndex={index}
          id={id}
        />
      );
    })}
  </div>
);

export default Tabs;
