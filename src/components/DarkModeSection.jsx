import classes from "../assets/darkmode.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";
import { motion, AnimatePresence } from "motion/react";

const DarkModeSection = () => {
  // State to manage visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);
  // State to toggle image visibility
  const [showImage, setShowImage] = useState(false); 
  // State to toggle fun fact modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the paragraph visibility
  const toggleParagraph = () => setIsVisible(!isVisible);
  // Function to toggle the modal visibility
  const toggleModal = () => setShowModal(!showModal);
  // Function to toggle the image visibility
  const toggleImage = () => setShowImage(!showImage);

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date="2010s - Present"
        bgColor="#222222"
        timelineColor="#ffffff"
        id="dark-mode"
        prevId="flat-design"
        nextId="neumorphism"
      >
        <div className="container py-4">
        <button className="google-btn google-button" onClick={toggleImage}>
            {showImage ? "Ungoogle it" : "Google it"}
          </button>
          <h1 className="h1 text-white">Dark Mode</h1>
          <button className="btn btn-primary" onClick={toggleParagraph}> {isVisible ? "Hide" : "Show"} Background</button>
        </div>

        <section>
          <AnimatePresence>
            
          {showImage && (
          <div
            className="overlay-image"
            onClick={toggleImage} // Clicking the image will also close it
          >
            <img
              src="/images/googleDark.jpg"
              alt="Skeuomorphism Google"
              className="img-fluid"
            />
          </div>
        )}
            
            {isVisible && ( 
              <motion.div className="card border-primary mb-3" 
              initial={{ opacity: 0, y: -20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Ending state
              exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div className="card-header text-white">Background</div>
                <div className="card-body">
                  <p className="card-text text-white">
                  Dark mode is a feature that changes the color scheme of an application or website from light to dark. <br />
                  It's a popular option for those who prefer a less bright and more subdued interface. <br />
                  With dark mode, the background is typically black or dark gray, and the text and icons are white or light. <br /> 
                  This can reduce eye strain, especially in low-light environments. Additionally, some people find it more aesthetically pleasing and easier to read.
                  </p>
                </div>
              </motion.div> 
            )}
            </AnimatePresence>
          </section>

          <section>
            <button className="btn btn-info" onClick={toggleModal}>
                Fun Fact
            </button>

            <AnimatePresence>
            {showModal && (
              <motion.div
              initial={{ opacity: 0, y: -20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Ending state
              exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div className="modal show custom-modal" style={{ display: "block" }} tabIndex="-1">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-white">DID YOU KNOW?</h5>
                        <button
                        type="button"
                        className="btn-close"
                        onClick={toggleModal}
                        aria-label="Close"
                        >
                          <span aria-hidden="true"></span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p className="text-white">
                        Dark mode can significantly save battery life on devices. <br />
                        This is because OLED screens can turn off individual pixels displaying pure black, 
                        meaning when you use dark mode on an OLED screen, the black pixels essentially "turn off" and consume no power, <br />
                        leading to increased battery efficiency
                        </p>
                      </div>
                      {/* <div className="modal-footer">
                        
                        { <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={toggleModal}
                        >
                          Close
                        </button> }
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            )} 
            </AnimatePresence>
          </section>

      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default DarkModeSection;
