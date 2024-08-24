import React from "react";

import './footer.styles.css'

const Footer = () => {
  return (
    <div className="footer">
        <p className="footer-line">Contact: <a className="footer-link" href="mailto:vvkumar1@g.ucla.edu">vvkumar1@ucla.edu</a></ p>
        <p className="footer-line">Source code on <a className="footer-link" href="https://github.com/vvkumar2/personal-website.git" rel="noreferrer" target="_blank">GitHub</a></p>
        <p className="footer-line">&#169;2022 Los Angeles, CA | Designed and Created by Varun Kumar</p>
    </div>
    
  );
};

export default Footer;