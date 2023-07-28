import React from "react";
import {useState} from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Upper Case Was Clicked");
  };

  const handleOnChange = () => {
    console.log("On Change");
  };

const [text, setText] = useState("Enter text here");

// Later in your code, you can update the value of 'text' like this:
// setText("New text");
  return (
    <>
      <div>
        <h1>props.heading</h1>
        <textarea
          className="form-control"
          value={text}
          OnChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
      </div>
    </>
  );
}
