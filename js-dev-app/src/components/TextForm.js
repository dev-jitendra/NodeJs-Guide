import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Was Clicked");
    let newText= text.toUpperCase();
    setText(newText)
  };
  const handleLoClick = () => {
    // console.log("Upper Case Was Clicked");
    let newText= text.toLowerCase();
    setText(newText)
  };
  const handleClearClick = () => {
    // console.log("Upper Case Was Clicked");
    let newText= '';
    setText(newText)
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  };

const [text, setText] = useState("Enter text here");

// Later in your code, you can update the value of 'text' like this:
// setText("New text");
  return (
    <>
      <div className="container">
        <h2>Enter Your Text</h2>
        <textarea
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
        <button className="btn btn-primary my-3 mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
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
