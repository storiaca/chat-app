import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="Online icon" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="Close icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
