import { useState } from "react";
import "../App.css";
import classes from "../assets/skeuomorphism.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import ParallaxSection from "./ParallaxSection";

import { motion, AnimatePresence } from "motion/react";

const SkeuomorphismSection = () => {
  // State to manage visibility of the paragraph
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the paragraph visibility
  const toggleParagraph = () => setIsVisible(!isVisible);

  const DATE = "2007 - 2013";
  const BG_COLOR = "#ffffff";
  const ACCENT_COLOR = "#2FA4E7";
  const FONT_FAMILY =
    "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";

  return (
    <ScopedWrapper classes={classes}>
      <ParallaxSection
        date={DATE}
        bgColor={BG_COLOR}
        accentColor={ACCENT_COLOR}
        fontFamily={FONT_FAMILY}
        id="skeuomorphism"
        prevId="early-web"
        nextId="flat-design"
      >
        {!isVisible && (
          <motion.div
            className="container py-4"
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
                Skeuomorphism
              </h1>
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
                initial={{ opacity: 0, y: -20 }} // Starting state
                animate={{ opacity: 1, y: 0 }} // Ending state
                exit={{ opacity: 0, y: -20 }} // Exit state (if needed)
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
              >
                <div>
                  <p>
                    Skeuomorphism is where an object in software mimics its
                    real-world counterpart. <br />
                    Skeuomorphism helped a generation through the learning curve
                    of coming to grips with a digital era. <br />
                    But, it also began to hold us back.We became familiar with
                    the concepts and they entered the language and our
                    day-to-day lives
                    <br />
                    but skeuomorphic design led to huge amounts of clutter on
                    the desktop.
                  </p>
                </div>

                <div>
                  <p>
                    Skeuowmorphism began to take shape in the 1980s. <br />
                    One of its earliest proponents was Steve Jobs of Apple. The
                    idea was simple; computer interfaces would be much more
                    intuitive to users if skeuomorphic design were applied.
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

export default SkeuomorphismSection;
