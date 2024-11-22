import classes from "../assets/neumorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";
import { motion, AnimatePresence } from "motion/react";

const NeumorphismSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection date="2020s" bgColor="#D9E3F1" timelineColor="#485785">
        <div id="neumorphism" className="container py-4">
          <h1 className="h1" style={{ color: "#485785" }}>
            Neumorphism
          </h1>
          <button className="btn btn-primary" onClick={toggleParagraph}> {isVisible ? "Hide" : "Show"} Background</button>
        </div>

        <section>
          <AnimatePresence>
            {isVisible && ( 
              <motion.div className="card border-primary mb-3" 
              initial={{ opacity: 0, y: -20 }} // Starting state
              animate={{ opacity: 1, y: 0 }} // Ending state
              exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
              transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div className="card-header">Background</div>
                <div className="card-body">
                  <p className="card-text">
                    Early web design in the 1990s was simple and text-based, with static HTML 
                    pages and minimal graphics due to slow internet speeds. <br/>
                    Layouts relied on tables, fonts were limited to system defaults, and bright 
                    colors or animated GIFs were common. Cross-browser compatibility <br/>
                    was a challenge during the "browser wars," and the introduction of 
                    CSS in the mid-1990s began improving design flexibility. This era set the stage for modern web development.
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
                        <h5 className="modal-title">DID YOU KNOW?</h5>
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
                        <p>
                          World’s first website was created By Tim Berners-Lee on August 6, 1991 and is still online.
                          Although its not much by todays standards, its the grandparent of all websites ever.
                        </p>
                      </div>
                      <div className="modal-footer">
                        
                        {/* <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={toggleModal}
                        >
                          Close
                        </button> */}
                      </div>
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

export default NeumorphismSection;
