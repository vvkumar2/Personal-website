import React from "react";

import ImageBoxList from "../../components/image-box-list/image-box-list.component";
import SectionHeader from "../../components/section-header/section-header.component";


import './skills.styles.css'

const Skills = () => {
  return (
    <div className="skills-section">
        <SectionHeader header_name="My Skills" />
        <ImageBoxList />

    </div>
  );
};

export default Skills;
