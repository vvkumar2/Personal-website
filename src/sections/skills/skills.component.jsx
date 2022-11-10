import React from "react";

import ImageBoxList from "../../components/image-box-list/image-box-list.component";
import SectionHeader from "../../components/section-header/section-header.component";


import './skills.styles.css'

const Skills = () => {
  return (
    <div className="skills-section" id="skills-section-id">
        {/* <SectionHeader header_name="My Skills" /> */}
        <h1 className="skills-heading">My Skills</h1>
        <ImageBoxList />

    </div>
  );
};

export default Skills;
