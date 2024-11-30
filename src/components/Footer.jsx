import { motion } from "framer-motion";

const Footer = ({ color, fontFamily }) => {
    return (
        <footer
            style={{
                position: "absolute",
                left: "50%",
                bottom: "5px",
                transform: "translateX(-50%)", // Only horizontal centering
                overflow: "hidden",
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: false }}
            >
                <h6 className='footerFloat' style={{color: color, fontFamily: fontFamily }}>
                    CS3650 - FINAL PROJECT <br />
                    Designed By: Isabel Armstrong, Lindsay Bowman, Alon Saar, Ethan Stewart 
                </h6>   
            </motion.div>   
        </footer>
    )
}

export default Footer;