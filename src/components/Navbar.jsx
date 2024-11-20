import React from 'react';
//import styles from './Navbar.module.css';
import periods from '../../utils/periods';

const Navbar = () => {
    return (
  //       <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  // <div class="container-fluid">
  //   <a class="navbar-brand" href="#">Navbar</a>
  //   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarColor01">
  <nav >
  <div >
    <a  href="#">Navbar</a>
    <button  type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span ></span>
    </button>
    <div  id="navbarColor01">
      {/* <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul> */}
      {/* <ul class="navbar-nav me-auto">
            {periods.map((period, index) => (
            <li class="nav-item" key={index}>
            <a class="nav-link" href="#">{period.title}</a>
            </li>
            ))}
        </ul> */}
        <ul >
            {periods.map((period, index) => (
            <li  key={index}>
            <a  href="#">{period.title}</a>
            </li>
            ))}
        </ul>
      {/* <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        
        
        /* <nav className={styles.Navbar}>
        <ul>
            {periods.map((period, index) => (
            <li key={index}>{period.title}</li>
            ))}
        </ul>
     </nav> */
   );
};

export default Navbar;