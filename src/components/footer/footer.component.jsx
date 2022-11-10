import React from "react";

import './footer.styles.css'

const Footer = (props) => {
  return (
    <div className="footer">
        <h1 className="footer-line">Contact: <a className="footer-link" href="mailto:vvkumar1@g.ucla.edu">vvkumar1@ucla.edu</a></h1>
        <h1 className="footer-line">Source code on <a className="footer-link" href="https://github.com/vvkumar2/personal-website.git">GitHub</a></h1>
        <h1 className="footer-line">&#169;2022 Los Angeles, CA | Designed and Created by Varun Kumar</h1>
    </div>
    
  );
};

export default Footer;