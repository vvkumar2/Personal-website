import React from "react";
import AboutText from "../../components/about-text/about-text.component";
import SectionHeader from "../../components/section-header/section-header.component";

import './about.styles.css'

const About = () => {
  return (
    <div className="about-section" id="about-section-id">
        <SectionHeader header_name="About" />
        <AboutText />
    </div>
  );
};

export default About;
