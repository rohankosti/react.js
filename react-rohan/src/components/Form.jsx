import React, { useState } from "react";

function form(props) {
  const [text, settext] = useState("Enter the text");

  function click() {
    // console.log(text);
    let Uc = text.toUpperCase();

    settext(Uc);
  }
  function change(event) {
    settext(event.target.value);
  }

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Example textarea
      </label>
      <textarea
        className="form-control"
        onChange={change}
        value={text}
        id="exampleFormControlTextarea1"
        rows="5"
      ></textarea>
      <button className="btn btn-primary mt-3" onClick={click}>
        Convert to Upercase
      </button>
      <h1 className="my-3">Preview</h1>
      <div>{text}</div>
    </div>
  );
}
export default form;
