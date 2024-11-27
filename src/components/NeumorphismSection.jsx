import classes from "../assets/neumorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";
import { motion, AnimatePresence } from "motion/react";

const NeumorphismSection = () => {
  // State to manage visibility of the paragraph and modal
  const [isVisible, setIsVisible] = useState(false);
  // State to toggle fun fact modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to toggle image visibility
  const [showImage, setShowImage] = useState(false); 

  // Function to toggle the paragraph and modal visibility
  const toggleParagraph = () => setIsVisible(!isVisible);
  // Function to toggle the modal visibility
  const toggleModal = () => setShowModal(!showModal);
  // Function to toggle the image visibility
  const toggleImage = () => setShowImage(!showImage);

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection 
        date="2020s" 
        bgColor="#D9E3F1" 
        timelineColor="#485785"
        id="neumorphism"
        prevId="dark-mode"
      >
        <div className="container py-4">
        <button className="google-btn google-button" onClick={toggleImage}>
            {showImage ? "Ungoogle it" : "Google it"}
          </button>
          <h1 className="h1" style={{ color: "#485785" }}>
            Neumorphism
          </h1>
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
              src="/images/googleNeuomorphism.png"
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
                <div className="card-header">Background</div>
                <div className="card-body">
                  <p className="card-text">
                  Neumorphism is basically “New Skeuomorphism” (skeumorphism with a modern twist). <br />
                  It’s got a bit of a “soft” look and feel that reminds a bit of flat design. <br />
                  Even though it relates to skeuomorphism, there is a new focus in the entire UI design style with
                  neumorphism. <br /> 
                  This focus is not necessarily on the contrast or similarity between the real and
                  digital worlds, but rather the color palette.
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
                        As a trend, neumorphism is said to have been kicked off by one particular Dribbble shot that went viral. 
                        The designer behind it encouraged fellow designers to “Imagine that we live in a dimension where skeuomorph is still alive 
                        and has continued its evolution in mobile interfaces. What would applications look like then? Here is my vision.”
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

export default NeumorphismSection;
