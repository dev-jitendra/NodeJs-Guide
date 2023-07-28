import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkgray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} /> */}
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze" mode={mode} /> */}
        {/* <About mode={mode} /> */}
        <Alert/>
      </div>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
};

export default App;
