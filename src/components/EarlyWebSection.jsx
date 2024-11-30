import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";
import { motion, AnimatePresence } from "motion/react";

const EarlyWebSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);
  
  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "1990s";
  const BG_COLOR = "#ffffff";
  const ACCENT_COLOR = "#000000";
  const FONT_FAMILY = "Times New Roman, Times, serif";

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection 
        date={DATE} 
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="early-web"
        nextId="skeuomorphism"
      >
        {!isVisible && (
          <motion.div
          initial={{ opacity: 0, y: -20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Ending state
          exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
          <div className="container py-4">
            <h1 style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>EarlyWeb</h1>
            <button onClick={toggleParagraph}> {isVisible ? "Hide" : "Show"} Background</button>
          </div>
          </motion.div>
        )}

        <section>
          <AnimatePresence>
            {isVisible && ( 
              <motion.div
              className="container py-4"
              initial={{ opacity: 0, y: -20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Ending state
              exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div>
                  <p>
                    Early web design in the 1990s was simple and text-based, with static HTML 
                    pages and minimal graphics due to slow internet speeds. <br />
                    Layouts relied on tables, fonts were limited to system defaults, and bright 
                    colors or animated GIFs were common. <br /> Cross-browser compatibility 
                    was a challenge during the "browser wars," and the introduction of 
                    CSS in the mid-1990s began improving design flexibility. <br />This era set the stage for modern web development.
                  </p>
                </div>

                <div>
                  <p>
                    The world’s first website was created By Tim Berners-Lee on August 6, 1991 and is still online.
                    Although its not much by todays standards, its the grandparent of all websites ever.
                      
                  </p>
                  <a href="https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html" target="_blank">Check it out!</a>
                </div>
                      
                <button onClick={toggleParagraph}> {isVisible ? "Hide" : "Show"} Background</button>


              </motion.div> 
            )}
            </AnimatePresence>
          </section>

      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default EarlyWebSection;
