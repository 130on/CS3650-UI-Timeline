import { useState } from 'react';
import '../App.css';

import classes from "../assets/skeuomorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";

const SkeuomorphismSection = () => {

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
        date="2007 - 2013"
        bgColor="#ffffff"
        timelineColor="#000000">

        <div id="skeuomorphism" className="container py-4">
          <button className="google-btn google-button" onClick={toggleImage}>
            {showImage ? "Ungoogle it" : "Google it"}
          </button>
          <h1 className="h1">Skeuomorphism</h1>
          <button className="btn btn-primary" onClick={toggleParagraph}> {isVisible ? "Hide" : "Show"} Background</button>

        </div>
        
        {showImage && (
          <div
            className="overlay-image"
            onClick={toggleImage} // Clicking the image will also close it
          >
            <img
              src="/images/googleSkeuomorphism.png"
              alt="Skeuomorphism Google"
              className="img-fluid"
            />
          </div>
        )}

        {isVisible && ( 
        <div className="card border-primary mb-3" >
            <div className="card-header">Background</div>
            <div className="card-body">
              <p className="card-text">Skeuomorphism is where an object in software mimics its real-world counterpart. <br />
                                  Skeuomorphism helped a generation through
                                  the learning curve of coming to grips with a
                                  digital era. <br />But, it also began to hold us back.We
                                  became familiar with the concepts and they
                                  entered the language and our day-to-day lives
                                  <br />but skeuomorphic design led to huge amounts of
                                  clutter on the desktop. 
                  </p>
            </div>
        </div> 
        )}
        <section>
        <button className="btn btn-info" onClick={toggleModal}>
            Fun Fact
        </button>


        {showModal && (
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
                    Skeuowmorphism began to take shape in the 1980s. <br />One
                    of its earliest proponents was Steve Jobs of Apple. The idea
                    was simple; computer interfaces would be much more intuitive
                    to users if skeuomorphic design were applied.
                  </p>
                </div>
                {/* <div className="modal-footer">
                  
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )} 
        </section>

      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default SkeuomorphismSection;
