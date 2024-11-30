import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import DateMarker from "./DateMarker";
import TimeLine from "./TimeLine";
import ArrowKeyNav from "./ArrowKeyNav";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ParallaxSection = ({ id, prevId, nextId, children, date, bgColor, accentColor, fontFamily }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section
      id={id}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
      }}
    >

      <Navbar color={accentColor} fontFamily={fontFamily} />
      <TimeLine color={accentColor} />
      <DateMarker
        date={date}
        scrollYProgress={scrollYProgress}
        color={accentColor}
        fontFamily={fontFamily}
      />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        style={{ textAlign: "center", zIndex: 1 }}
      >
        {children}
      </motion.div>
      <ArrowKeyNav prevId={prevId} nextId={nextId} color={accentColor} fontFamily={fontFamily} />
      <Footer color={accentColor} fontFamily={fontFamily} />
    </section>
  );
};

export default ParallaxSection;
