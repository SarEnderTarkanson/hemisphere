import React from "react";
import './Hemisphere.css'
import northernPic from "./images/NorthernHemisphere.jpg";
import southernPic from "./images/SouthernHemisphere.jpg";


const hemisphereConfig = {
  Northern: {
    text: 'it is Northern Hemisphere',
    picture: northernPic
  },
  Southern: {
    text: 'it is southern Hemisphere',
    picture: southernPic
  }
}

const HemisphereDisplay = ({ lattitude }) => {
  const hemisphere =
    lattitude > 0 ? "Northern" : "Southern";
  const { text, picture } = hemisphereConfig[hemisphere]
  return (
    <div className={hemisphere}>
      <div className="ui raised text container segment">
        <img src={picture} alt="" />
      </div>
      <div className="ui teal bottom attached label">
        <h1>{text}</h1>
      </div>
    </div>

  );
};

export default HemisphereDisplay;
