import { motion } from "framer-motion";
import { Link } from "react-scroll";

const ArrowKeyNav = ({ color, prevId = "", nextId = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: false }}
            style={{
                position: "absolute",
                right: "40px", // Adjust this for horizontal placement
                top: "50%",    // Position at the vertical center
                transform: "translateY(-50%)", // Offset to perfectly center
                display: "flex", // Optional, ensures alignment within the div if needed
                flexDirection: "column", // Stack the SVGs vertically
                alignItems: "center", // Center horizontally within the container
                gap: "20px", // Add gap between SVGs (adjust as needed)
            }}
        >
            {/* Previous Section Link */}
            <Link
                title="Previous Section"
                to={prevId}
                smooth={true}
                duration={500}
                style={{ cursor: prevId ? "pointer" : "not-allowed", opacity: !prevId ? "0.2" : "1" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={color} className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                </svg>
            </Link>

            {/* Vertical Text */}
            <div
                style={{
                    writingMode: "vertical-rl", // Makes text read vertically
                    textAlign: "center", // Centers the text
                    color: color, // Matches the arrow color
                    fontSize: "16px", // Adjust size of text
                    marginTop: "10px", // Adjusts the vertical spacing between the arrows and text
                }}
            >
                Use the arrow keys or buttons to navigate the sections
            </div>

            {/* Next Section Link */}
            <Link
                title="Next Section"
                to={nextId}
                smooth={true}
                duration={500}
                style={{ cursor: nextId ? "pointer" : "not-allowed", opacity: !nextId ? "0.2" : "1" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill={color} className="bi bi-arrow-down-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                </svg>
            </Link>
        </motion.div>
    );
}

export default ArrowKeyNav;