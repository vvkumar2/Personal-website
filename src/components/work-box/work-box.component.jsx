import React from "react";

import './work-box.styles.css'

const WorkBox = (props) => {
  return (
    <div className="experience-box">
        <div className="experience-box-header">
            <div className="header-line-one">
                <h1 className="experience-name">{props.name}</h1>
                <h2 className="experience-location">{props.location}</h2>
            </div>
            <div className="header-line-two">
                <h2 className="experience-position">{props.position}</h2>
                <h2 className="experience-year">{props.year}</h2>
            </div>
        </div>
        <div className="experience-box-text">
            <ul className="bullet-list">
                {props.desc.map((bullet) => {
                    return (
                        <li className="bullet">{bullet}</li>
                    )
                })}
            </ul>
        </div>
    </div>
  );
};

export default WorkBox;
