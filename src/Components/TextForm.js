import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container">
                <h2 className='mb-3 text-secondary'>{props.heading}</h2>
                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-danger mx-2" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
            </div>
            <hr />
            <div className="container my-3">
                <h3 className='text-success'>Your text summary</h3>
                <ul>
                    <li>
                        <p>{text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
                    </li>
                    <li>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                    </li>
                </ul>

                <h3 className='text-warning'>Preview</h3>
                <ul>
                    <li>
                      <p>{text}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
