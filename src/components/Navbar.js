import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  const clickButton = (color) => {
    // console.log(color);
    props.colorChangeData(color);
  }

    return ( 
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.appName}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.aboutText}</Link>
         </li>
      </ul>
      <button className='btn btn-primary mx-2' onClick={()=>clickButton("secondary")}>Secondary</button>
      <button className='btn btn-primary mx-2' onClick={()=>clickButton("success")}>Success</button>
      <button className='btn btn-primary mx-2' onClick={()=>clickButton("info")}>Info</button>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-4 text-${props.mode === "light" ? "dark" : "light"}`}>
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{capitalize( props.mode)} Mode</label>
      
    </div>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired,
}


Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set text here"
};
