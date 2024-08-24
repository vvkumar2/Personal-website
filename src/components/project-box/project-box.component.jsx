import React from "react";
import ColoredCircle from "../colored-circle/colored-circle.component";

import './project-box.styles.css'

const ProjectBox = (props) => {
  return (
    <div className="project-box">
        <div className="project-box-header">
            <div className="header-line-one">
                <div>
                    <h1 className="project-name">{props.name}</h1>
                </div>
                <div className="project-right-side">
                    <div className="colored_bubble">
                        <ColoredCircle color={props.bubble_color} />
                    </div>
                    <h2 className="project-language">{props.language}</h2>
                </div>
            </div>
            <div className="header-line-two">
                <a href={props.url} rel="noreferrer" target="_blank" className="project-url">
                    {props.url_type}
                </a>
                <h2 className="project-year-created">{props.year}</h2>
            </div>
            
        </div>
        <div className="project-box-text">
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

export default ProjectBox;
