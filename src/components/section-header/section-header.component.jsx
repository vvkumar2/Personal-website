import React from "react";

import './section-header.styles.css'

const SectionHeader = (props) => {
  return (
    <div>
        <h1 className="section-header">
            {/* &lt;!-- */}
            &#123; 
            <span className="section-header-title">&nbsp;&nbsp;&nbsp;{props.header_name}&nbsp;&nbsp;&nbsp;</span>
            {/* --&gt; */}
            &#125;
        </h1>
    </div>
    
  );
};

export default SectionHeader;