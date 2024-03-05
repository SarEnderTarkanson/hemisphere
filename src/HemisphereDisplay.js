import React from "react";

const HemisphereDisplay = ({ lattitude }) => {
    const hemisphere = lattitude > 0 ? 'Northern hemisphere' : 'Southern hemipshere'
    return <div>{hemisphere}</div>;
};

export default HemisphereDisplay;
