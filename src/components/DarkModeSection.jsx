import classes from "../assets/darkmode.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";
import React, { useState } from "react";
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

  const DATE = "2010s - Present";
  const BG_COLOR = "#222222";
  const ACCENT_COLOR = "#ffffff";
  const FONT_FAMILY =
    "Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="dark-mode"
        prevId="flat-design"
        nextId="neumorphism"
      >
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Starting state
            animate={{ opacity: 1, y: 0 }} // Ending state
            exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          >
            <div className="container py-4">
              <h1
                className="h1"
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
              >
                Dark Mode
              </h1>
              <h2
                style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}
                className="fs-4 mb-4"
              >
                Simple and readable
              </h2>
              <button className="btn btn-primary" onClick={toggleParagraph}>
                {" "}
                {isVisible ? "Hide" : "Show"} Background
              </button>
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
                <div style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                  <p className="text-white">
                    Dark mode is a feature that changes the color scheme of an
                    application or website from light to dark. <br />
                    It's a popular option for those who prefer a less bright and
                    more subdued interface. <br />
                    With dark mode, the background is typically black or dark
                    gray, and the text and icons are white or light. <br />
                    This can reduce eye strain, especially in low-light
                    environments. Additionally, some people find it more
                    aesthetically pleasing and easier to read.
                  </p>
                </div>

                <div style={{ color: ACCENT_COLOR, fontFamily: FONT_FAMILY }}>
                  <p className="text-white">
                    Dark mode can significantly save battery life on devices.{" "}
                    <br />
                    This is because OLED screens can turn off individual pixels
                    displaying pure black, meaning when you use dark mode <br />
                    on an OLED screen, the black pixels essentially "turn off"
                    and consume no power, <br />
                    leading to increased battery efficiency
                  </p>
                </div>

                <button className="btn btn-primary" onClick={toggleParagraph}>
                  {" "}
                  {isVisible ? "Hide" : "Show"} Background
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </ParallaxSection>
    </ScopedWrapper>
  );
};

export default DarkModeSection;
