import React,{useState} from 'react'


const TextForm = (props) => {
    const handleUpClick=()=>{
        // console.log("upper case was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleclearClick=()=>{
        // console.log("upper case was clicked " + text);
        let newText=" ";
        setText(newText)
    }
    const handleLoClick=()=>{
        // console.log("upper case was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{

        setText(event.target.value);
    }



    const[text,setText]=useState("");
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleclearClick}>Clear Text</button>
      
    </div>
    <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
