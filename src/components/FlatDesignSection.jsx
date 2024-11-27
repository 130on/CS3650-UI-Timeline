import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, {useState} from "react";
import { motion, AnimatePresence } from "motion/react";

const FlatDesignSection = () => {
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
        date="2013 - 2017"
        bgColor="#ffffff"
        timelineColor="#000000"
        id="flat-design"
        prevId="skeuomorphism"
        nextId="dark-mode"
      >
        <div className="container py-4">
        <button className="google-btn google-button" onClick={toggleImage}>
            {showImage ? "Ungoogle it" : "Google it"}
          </button>
          <h1 className="h1">Flat Design</h1>
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
              src="/images/googleFlat.png"
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
                  Flat design is a style of interface design that rejects the 3D elemenes of skeuomorphism. <br />
                  It does not abandon in but rather focuses on rendering objects in flat minimalist form. <br />
                  It avoids the excessive use of gradients, textures, and drop shadows <br />
                  designed to deliver 3D effects for simpler elements focusing on simple flat elements, typography and glat color schemes. 
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
                        Microsoft’s ill-fated Zune MP3 player which was launched back in 2006, is a good example of early digital flat design.
                        </p>
                      </div>
                      <img src="../../public/images/Zune.png" alt="zune mp3 player" />

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

export default FlatDesignSection;
