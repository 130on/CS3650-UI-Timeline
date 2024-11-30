import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ color, fontFamily }) => {
  return (
    <ScopedWrapper classes={classes}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "5px",
          width: "100%",
          padding: "0 100px",
          transform: "translateX(-50%)",
          overflow: "hidden",
          fontFamily: fontFamily,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: false }}
        >
          <nav className="navbar navbar-expand-xl fs-4">
            <div className="container-fluid">
              <h1 className="navbar-brand fs-3 fw-bold" style={{color: color}}>UI Timeline</h1>
              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="early-web"
                      smooth={true}
                      duration={500}
                      style={{color: color}}
                    >
                      Early Web
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link
                      className="nav-link"
                      to="skeuomorphism"
                      smooth={true}
                      duration={500}
                      style={{color: color}}
                    >
                      Skeuomorphism
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link
                      className="nav-link"
                      to="flat-design"
                      smooth={true}
                      duration={500}
                      style={{color: color}}
                    >
                      Flat Design
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link
                      className="nav-link"
                      to="dark-mode"
                      smooth={true}
                      duration={500}
                      style={{color: color}}
                    >
                      Dark Mode
                    </Link>
                  </li>
                  <li className="nav-item mx-4">
                    <Link
                      className="nav-link"
                      to="neumorphism"
                      smooth={true}
                      duration={500}
                      style={{color: color}}
                    >
                      Neumorphism
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </motion.div> 
      </div>
    </ScopedWrapper>
  );
};

export default Navbar;
