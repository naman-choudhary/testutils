import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter the text here");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    )
}