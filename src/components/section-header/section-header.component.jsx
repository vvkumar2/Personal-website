import React from "react";

import './section-header.styles.css'

const SectionHeader = (props) => {
  return (
    <div>
        <h1 className="section-header">
            &#123; 
            <span className="section-header-title"> {props.header_name} </span>
            &#125;
        </h1>
    </div>
    
  );
};

export default SectionHeader;