import React from "react";
import { useMediaQuery } from 'react-responsive'

import './section-header.styles.css'

const sectionHeaderStyle = {
  color: '#d4af90',
  fontSize: 60,
  margin: '70px 0px 20px 0px',
}

const mobileSectionHeaderStyle = {
  color: '#d4af90',
  fontSize: 40,
  margin: '70px 0px 20px 0px',
}

const SectionHeader = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <div>
        {!isMobile && <h1 style={sectionHeaderStyle} className="section-header">
            &#123; <span className="section-header-title">&nbsp;&nbsp;{props.header_name}&nbsp;&nbsp;</span> &#125;
        </h1>}
        {isMobile && <h1 style={mobileSectionHeaderStyle} className="section-header">
            &#123; <span className="section-header-title">&nbsp;&nbsp;{props.header_name}&nbsp;&nbsp;</span> &#125;
        </h1>}
    </div>
    
  );
};

export default SectionHeader;