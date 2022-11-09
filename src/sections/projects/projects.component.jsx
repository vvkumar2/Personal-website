import React from "react";
import ProjectBox from "../../components/project-box/project-box.component.jsx";
import SectionHeader from "../../components/section-header/section-header.component.jsx";

import './projects.styles.css'

const Projects = () => {
    const proj1_bullets = ["Constructed a database using SQL, Java, and JDBC (Java Database Connectivity) to store user-input about the hierarchies, salaries, and roles within a business.",
        "Formatted data into text files using external Java libraries to improve readability and exporting capabilities.",
        "Created a password authentication system to protect confidential information."
    ]

    const proj2_bullets = ["Building a Natural Language Processing (NLP) model using Tensorflow, spaCy, and Scikit-learn to separate a medical research paper into its various components (e.g., abstract, objective, methods, results).",
        "Developing a web app with Python (Flask), JavaScript, and HTML/CSS to host the NLP model, enabling researchers to efficiently skim through literature."
    ]

    const proj3_bullets = ["Developed a machine learning model by applying TensorFlow, Scikit-learn, Pandas, and Numpy to predict the type of food in an image.",
        "Preprocessed data, optimized input data pipelines, and built, trained, and fine-tuned an image classification model using deep learning to successfully predict on 101 types of food with over 95% accuracy."
    ]

  return (
    <div className="projects-section">
        <SectionHeader header_name="Projects" />
        <ProjectBox name="NLP Sentence Classification" language="Python" year="2022" desc={proj2_bullets} url="" bubble_color="#3168b0"/>
        <ProjectBox name="Food Image Classification" language="Python" year="2022" desc={proj3_bullets} url="" bubble_color="#3168b0"/>
        <ProjectBox name="Human Resources Database" language="Java" year="2021" desc={proj1_bullets} url="" bubble_color="#d18b45"/>
    </div>
  );
};

export default Projects;
