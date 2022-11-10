import React from "react";
import SectionHeader from "../../components/section-header/section-header.component.jsx";
import WorkBox from "../../components/work-box/work-box.component.jsx";

import './work.styles.css'

const Work = () => {
    const work1_bullets = ["Preventing server data loss at Intel’s Austin, Jones Farm, and Hudson sites using Veeam Backup and Replication software (VBR).",
    "Built an internal website with Python (Flask), JavaScript, and SQL to consolidate over 200,000 datapoints into a concise web page – adopted company-wide and in use today.",
    "Executed queries from Python to read and write a MySQL database to allow for improved website functionality such as filtering, searching, and editing data.",
    "Maintained long-term retention archives for past processors using Intel’s START programming language on the command line."
    ]
    
    const work2_bullets = ["Developed landing pages using WordPress and HTML/CSS that displayed stores carrying company products within 10 miles of a user’s location.",
        "Created process flows and frameworks that improved efficiency by eliminating unnecessary steps during manufacturing and new product development.",
        "Assisted in building two infection-control prototypes that use hydrogen peroxide gas-plasma technology."
        ]

  return (
    <div className="work-section" id="experience-section-id">
        <SectionHeader header_name="Experience" />
        <WorkBox name="Intel Corporation" location="Santa Clara, CA" year="April 2022 - Present" position="Software Engineering Intern" desc={work1_bullets}/>
        <WorkBox name="You First Services, Inc." location="Buffalo, NY" year="July 2022 - November 2020" position="Engineering and Digital Marketing Intern" desc={work2_bullets}/>
    </div>
  );
};

export default Work;
