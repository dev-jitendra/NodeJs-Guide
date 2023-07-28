import React, { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    // Set the initial state of the toggle switch based on the mode
    const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
    toggleSwitch.checked = props.mode === "dark";
  }, [props.mode]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{
        backgroundColor: props.mode === "light" ? "gray" : "light",
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="form-check form-switch mx-4">
          <input
            onClick={props.toggleMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-light ${
              props.mode === "dark" ? "light" : "dark"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            Dark
          </label>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
