import React from "react";
import SectionHeader from "../../components/section-header/section-header.component.jsx";
import WorkBox from "../../components/work-box/work-box.component.jsx";

import './work.styles.css'

const Work = () => {
    const cognizant_bullets = [
      "Created a cloud-native .NET telemetry microservice for Cognizant's client to capture critical logs, metrics, and traces from their legacy machines, and implemented a centralized collector to aggregate the data using OpenTelemetry, ensuring software portability and preventing vendor lock-in.", 
      "Centralized telemetry data from distributed systems and visualized it using Grafana, creating a cost-efficient solution by developing a filtering pipeline to ensure only critical data was processed.", 
      "Deployed the cloud-native microservice on a 40-node distributed system, demonstrating its scalability and robustness, leading to stakeholder approval for full-scale implementation."
    ]

    const intel_bullets = [
      "Automated the collection of power usage statistics for Intel's five Santa Clara datacenters by scraping data and updating a time-series database, achieving real-time updates to optimize energy consumption.",
      "Developed a comprehensive React-based dashboard displaying real-time server health, including a detailed layout of the entire datacenter and an additional rack view to drill down into individual racks, chassis, and machines, enhancing issue detection and resolution.",
      "Achieved a 98%+ backup success rate across Intel's Santa Clara, Jones Farm, and Austin datacenters by troubleshooting and resolving server backup issues using Veeam Backup and Replication.",
      "Developed a company-wide internal website to monitor server health by utilizing Flask and JavaScript, resulting in improved access to critical server information."
    ]
    
    const yfs_bullets = [
      "Designed intuitive WordPress and HTML/CSS landing pages, increasing customer engagement by highlighting local stores carrying our products within a 10-mile radius.",
      "Enhanced project efficiency by devising Gantt charts and detailed manufacturing records, achieving a 10% reduction in production time, and surpassing regulatory compliance standards.",
      "Collaborated with the engineering team to construct two advanced infection-control prototypes, employing hydrogen peroxide gas-plasma technology for efficient surface disinfection."
    ]

  return (
    <div className="work-section" id="experience-section-id">
        <SectionHeader header_name="Experience" />
        <WorkBox name="Cognizant" location="Irvine, CA" year="May 2024 - Present" position="Associate Intern" desc={cognizant_bullets}/>
        <WorkBox name="Intel" location="Santa Clara, CA" year="April 2022 - Present" position="Software Engineering Intern" desc={intel_bullets}/>
        <WorkBox name="You First Services, Inc." location="Buffalo, NY" year="July 2020 - November 2020" position="Engineering and Digital Marketing Intern" desc={yfs_bullets}/>
    </div>
  );
};

export default Work;
