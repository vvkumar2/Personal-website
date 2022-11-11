import React, { useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'

import './menu-button.styles.css'


const MenuButton = () => {
    const [isOpen, setOpen] = useState(false)
    const classes = isOpen ? 'hamburger-show' : 'hamburger-show-hide'

    // useEffect(() => {
    //     return (
    //         <div>HIHIHI</div>
    //     );
    // }, [isOpen])

    return (
        <div>
            <div className="hamburger-button">
                <Hamburger color="white" direction="left" rounded toggled={isOpen} toggle={setOpen}/>
            </div>
            {/* { isOpen ? <div className={classes}>HIHIHI</div> : null } */}
            <div className={classes}>
                <ul className="hamburger-links">
                    <div onClick={() => window.location.replace("/#about-section-id")}>About</div>
                    <div onClick={() => window.location.replace("/#experience-section-id")}>Experience</div>
                    <div onClick={() => window.location.replace("/#projects-section-id")}>Projects</div>
                </ul>
            </div>
        </div>
    );
}

export default MenuButton;
