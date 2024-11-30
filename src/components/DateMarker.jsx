import { motion } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

const DateMarker = ({ date, scrollYProgress, color, fontFamily }) => {
  const y = useParallax(scrollYProgress, 500);

  return (
    <div
      style={{
        position: "absolute",
        left: "30px", // Adjust to where you want the ball and date
        display: "flex",
        alignItems: "center", // Align ball and text horizontally
        zIndex: 1,
      }}
    >
      {/* Ball (Marker) */}
      <motion.div
        style={{
          width: "30px", // Ball size
          height: "30px", // Ball size
          borderRadius: "50%", // To make it round
          backgroundColor: color, // Ball color
          marginRight: "15px", // Space between ball and date
          y, // Apply parallax effect to the ball
        }}
      />
      
      {/* Date Marker */}
      <motion.div
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          whiteSpace: "nowrap",
          color: color,
          fontFamily: fontFamily,
          y, // Apply parallax effect to the date
        }}
      >
        {date}
      </motion.div>
    </div>
  );
};

export default DateMarker;
