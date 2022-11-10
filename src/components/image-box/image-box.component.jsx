import React from "react";

import "./image-box.styles.css";

   

const ImageBox = (props) => {
    return (
    <div className="image-container">
        <div className="image-container-items">
            <img className="image" src={props.image_location} alt="" />
            <h1 className="image-skill">{props.skill_name}</h1>
        </div> 
    </div>
    );
};

export default ImageBox;