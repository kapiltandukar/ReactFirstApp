import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextFrom(props) {
    const handelUpClick = () => {
        let updateText = text.toUpperCase();
        setText(updateText);
        props.alertDisplay("Upper Mode has been enabled", "success");
    }
    const handelLowClick = () => {
        let updateText = text.toLocaleLowerCase();
        setText(updateText);
        props.alertDisplay("Lower Mode has been enabled", "success");
    }
    const handelClear = () => {
        setText("");
        props.alertDisplay("Clear all data.", "success");
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

   

  return (
      <>
        <div className='container'>
        <h1 style={{color: props.mode === "light" ? "black" : "white"}}>{props.heading}</h1>
        <div className="mb-3">
        <label className="form-label" style={{color: props.mode === "light" ? "black" : "white"}}>Text Here</label>
        
        <textarea className = "form-control" id="myBox" value={text} onChange={handelOnChange} rows="8" placeholder='Enter your text' style={{backgroundColor: props.mode === "light" ? "white" : "rgb(33,37,41, 0.95)", color: props.mode === "light" ? "black" : "white" }}></textarea>
        </div>
        <button className={`btn btn-${props.dynamicColor.colorName == null ? 'danger' : props.dynamicColor.colorName } mx-2`} onClick={handelUpClick}>Covert to uppercase</button>
        <button className={`btn btn-${props.dynamicColor.colorName == null ? 'danger' : props.dynamicColor.colorName } mx-2`} onClick={handelLowClick}>Covert to lowercase</button>
        <button className={`btn btn-${props.dynamicColor.colorName == null ? 'danger' : props.dynamicColor.colorName } mx-2`} onClick={handelClear}>Clear</button>
       
    </div>
    <div className='container'>
        <h1 style={{color: props.mode === "light" ? "black" : "white"}}>Your text suppery</h1>
        <p style={{color: props.mode === "light" ? "black" : "white"}}><b>{text.split(" ").length - 1} </b>words and <b>{text.length}</b> characters</p>
        <p style={{color: props.mode === "light" ? "black" : "white"}}><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2 style={{color: props.mode === "light" ? "black" : "white"}}>Preview</h2>
        <p style={{color: props.mode === "light" ? "black" : "white"}}>{text}</p>
        </div>
      </>

  )
}


TextFrom.propTypes = {
    heading:PropTypes.string.isRequired,
}

TextFrom.defaultProps = {
    heading: "Default Heading",
}

