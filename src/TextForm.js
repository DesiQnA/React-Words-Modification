import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    // setText("You clicked on hanndleupclick")
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    // console.log("upper case was clicked" +text);
    let newText = text.toLowerCase();
    // setText("You clicked on hanndleupclick")
    setText(newText);
    props.showAlert("Converted to Lower Case", "warning");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("on change");
  };

  const [text, setText] = useState("");
  // setText("New text");
  // console.log(text);

  const handleDelete = () => {
    setText("");
    props.showAlert("Deleted the content", "danger");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading} </h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {/* {props.heading} */}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleUpClick}
        >
          To UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleLowClick}
        >
          To LowerCase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-secondary mx-4"
          onClick={handleDelete}
        >
          Delete Content
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
