import classes from "../assets/flatdesign.module.css";
import ScopedWrapper from "../utils/ScopedWrapper";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <ScopedWrapper classes={classes}>
      <nav className="navbar container-fluid fixed-top navbar-expand-lg fs-4 shadow bg-light">
        <div className="container-fluid">
          <h1 className="navbar-brand fs-3 fw-bold mx-5">UI Timeline</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-5">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="early-web"
                  smooth={true}
                  duration={500}
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
                >
                  Neumorphism
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </ScopedWrapper>
  );
};

export default Navbar;
