import classes from "../assets/skeuomorphism.module.css";

import ScopedWrapper from "../utils/ScopedWrapper";


const Footer = () => {
    return (
     <ScopedWrapper classes={classes}>
        <footer>
                    
                    <h1 className='fotterFloat'>CS3650 - FINAL PROJECT <br />
                    Designed By: Isabel Armstrong, Lindsay Bowman, Alon Saar, 
                    Ethan Stewart </h1>
        </footer>
    
    </ScopedWrapper>
    )
}

export default Footer;