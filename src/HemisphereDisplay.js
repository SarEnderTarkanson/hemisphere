import React from "react";
import northernPic from "./images/NorthernHemisphere.jpg";
import southernPic from "./images/SouthernHemisphere.jpg";

const HemisphereDisplay = ({ lattitude }) => {
  const hemisphere =
    lattitude > 0 ? "Northern hemisphere" : "Southern hemipshere";
  const picture = lattitude > 0 ? northernPic : southernPic;
  return (
    <div>
      <img src={picture} alt="" />
      {hemisphere}
    </div>
  );
};

export default HemisphereDisplay;
