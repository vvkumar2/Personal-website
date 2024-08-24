import React from "react";
import ProjectBox from "../../components/project-box/project-box.component.jsx";
import SectionHeader from "../../components/section-header/section-header.component.jsx";

import './projects.styles.css'

const Projects = () => {
    const mask_away_bullets = [
        "Developed a mask removal system using a U-Net model for segmentation and a WGAN-GP model for facial reconstruction, enhancing facial recognition accuracy while managing resource usage effectively.",
        "Created a custom dataset of images of people with a mask, without a mask, and a binary overlay showing the mask location by adding masks to an existing facial images dataset based on 68 facial landmarks, enabling effective training and testing.",
    ]

    const pacman_rl_bullets = [
        "Developed a Capture The Flag variation of Pacman using reinforcement learning algorithms, including Approximate Q-Learning and Proximal Policy Optimization (PPO), enabling agents to learn and adapt their strategies in a dynamic game environment.",
        "Achieved an 84% win rate over 100 games against greedy agents, demonstrating the effectiveness of the Approximate Q-Learning algorithm in creating intelligent and adaptive game agents, with successful integration into the Unity platform for real-time visualization.",
    ]

    const put_mate_bullets = [
        "Deployed a Python-based algorithmic trading bot to analyze market data and option Greeks, providing reliable and customizable cash-secured put trading recommendations.",
        "Crafted a user-centric Flutter mobile application integrated with Firebase, offering interactive graphs for users to effortlessly select stocks and monitor current positions and suggestions.",
        "Implemented a push notification system to deliver timely trading advice, enhancing user decision-making based on real-time market data analysis and user preferences.",
    ]
    
    const reverse_cgol = [
        "Developed a tool to address the non-reversibility of Conway's Game of Life by transforming the problem into a Boolean satisfiability (SAT) problem. ",
        "Created a web interface allowing users to input grid configurations and explore possible predecessor states."
    ]

    const ucla_apartments_bullets = [
        "Modernized the apartment search process for students with a React.js web application by providing a system to track application statuses and integrating advanced search filters to bridge gaps in listing information.",
        "Utilized Scrapy to meticulously extract data from over 500 apartment listings, significantly enhancing the accuracy of the information provided to improve the reliability of search results for end-users."
    ]

    const nlp_bullets = [
        "Developed a TensorFlow LSTM neural network using tribrid embeddings to classify 50,000 medical abstracts into semantic sections with 95% accuracy, simplifying data retrieval for medical research purposes.",
    ]

  return (
    <div className="projects-section" id="projects-section-id">
        <SectionHeader header_name="Projects" />
        <ProjectBox 
            name="MaskAway" 
            language="Python" 
            year="2024" 
            desc={mask_away_bullets} 
            url="https://github.com/vvkumar2/MaskAwayGAN"
            url_type="GitHub Repository"
            bubble_color="#FFD43B"
        />
        <ProjectBox 
            name="Pacman Capture the Flag" 
            language="C#, Python" 
            year="2024" 
            desc={pacman_rl_bullets} 
            url="https://github.com/magnaprog/minicontest2"
            url_type="GitHub Repository"
            bubble_color="#823085"
        />
        <ProjectBox 
            name="PutMate" 
            language="Dart" 
            year="2023" 
            desc={put_mate_bullets} 
            url="https://github.com/vvkumar2/csp-bot"
            url_type="GitHub Repository"
            bubble_color="#3168b0"
        />
        <ProjectBox 
            name="Reverse Conway's Game of Life" 
            language="Python" 
            year="2024" 
            desc={reverse_cgol} 
            url="http://reversegame.life:8501/"
            url_type="Web Application"
            bubble_color="#FFD43B"
        />
        <ProjectBox 
            name="UCLA Apartment Finder" 
            language="React.js, Python" 
            year="2023" 
            desc={ucla_apartments_bullets} 
            url="https://github.com/vvkumar2/ucla-apartments"
            url_type="GitHub Repository"
            bubble_color="#61DBFB"
        />
        <ProjectBox
            name="Medical Abstract Classifier"
            language="Python"
            year="2022"
            desc={nlp_bullets}
            url=""
            bubble_color="#FFD43B"
        />
    </div>
  );
};

export default Projects;
