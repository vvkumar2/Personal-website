import React, {useState} from "react";
import Logo from "../../components/logo/logo.component";
import MenuButton from "../../components/menu-button/menu-button.component";
import './home.styles.css'
import { Typewriter } from 'react-simple-typewriter'
import linkedin_logo from "../../images/linkedin-logo-cream.png"
import github_logo from "../../images/github-logo-cream.png"
import down_arrow from "../../images/down-arrow-5.png"


const Home = () => {
    const [typewriterDone, setTypewriterDone] = useState(false);
    

    const handleLoopDone = () => {
        setTypewriterDone(true)
    }

    const homeLinkClasses = typewriterDone ? 'home-links-show' : 'home-links-hide'
    
    return (
        <div>
            <div>
                <Logo />
            </div>
            <div className="navbar-hamburger">
                <MenuButton />
            </div>
            <div className="home-text-container">
                <h1 className="home-text">
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={["", 'Hi, I am Varun Kumar.']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={120}
                        deleteSpeed={50}
                        delaySpeed={500}
                        onLoopDone={handleLoopDone}
                    />
                </h1>
                <div className={homeLinkClasses}>
                    <a href="https://github.com/vvkumar2" rel="noreferrer" target="_blank">
                        <img className="home-link-logo1" src={github_logo} alt="" width="137" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/varunkumar5/" rel="noreferrer" target="_blank">
                        <img className="home-link-logo2" src={linkedin_logo} alt="" width="130" />
                    </a>
                </div>

                <div className={homeLinkClasses}>
                    <img className="home-link-down-arrow" src={down_arrow} alt="" width="60" 
                        onClick={() => window.location.replace("/#about-section-id")}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
