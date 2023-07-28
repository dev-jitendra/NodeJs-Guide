import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "light" }}
      >
        <h2>Enter Your Text</h2>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "gray" : "light",
            color: props.mode === "light" ? "black" : "light",
          }}
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "light" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} in words and {text.length} characters.
          <p>{0.008 * text.split(" ").length}Minute read.</p>
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
