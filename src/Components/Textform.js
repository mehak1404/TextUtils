import React, { useState } from "react";
var CryptoJS = require("crypto-js");


export default function Textform(props) {
  const [text, setText] = useState("Enter your text");

  // encrypt
  // var key = "2e35f242a46d67eeb74aabc37d5e5d05";
  var key = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
  var iv1 = CryptoJS.enc.Utf8.parse("hf8685nfhfhjs9h8");
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify({ text }),
    key,{
      keySize: 16,
      iv: iv1,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7

    }
    
  )+ "" ;
  // var ciphertext = CryptoJS.AES.encrypt( {text},key).toString();

  // Decrypt
  // var bytes = CryptoJS.AES.decrypt(ciphertext, key);
  var bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    keySize: 16,
    iv: iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
  var decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  

  const handleEncryptClick = ()=>{
      setText(ciphertext);
  }
  const handleDecryptClick = ()=>{
      setText(decryptedData);
  }
  const handleUpClick = () => {
    console.log("you clicked the upcasebutton");
    let newText = text.toUpperCase();
    setText(newText);
  };

   
  const handleLoClick = () => {
    console.log("you clicked the locasebutton");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("you clicked the locasebutton");

    setText("");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };


  return (
    <>
      <div  style ={{color: props.mode=== 'dark'?'white':'black'}}
>
        <h1 >Enter the text below</h1>
        <div className="mb-3 my-3">
          <textarea
            style = {{backgroundColor : props.mode === 'dark' ? '#666161' : 'white' , color: props.mode === 'dark'? 'white' : 'black'}}
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="10"
            
          ></textarea>
          <button
            type="button"
            className="btn my-3 btn-primary"
            onClick={handleUpClick}
          >
            Convert To Uppercase
          </button>
          <button
            type="button"
            className="btn my-3 btn-primary"
            onClick={handleLoClick}
          >
            Convert To Lowercase
          </button>
          <button
            type="button"
            className="btn my-3 btn-primary"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn my-3 btn-primary"
            onClick={handleEncryptClick}
          >
            Encrypt Text
          </button>
          <button
            type="button"
            className="btn my-3 btn-primary"
            onClick={handleDecryptClick }
          >
            Decrypt Text
          </button>
        </div>
      </div>
      <div className="container  my-3">
        <h2 style ={{color: props.mode=== 'dark'?'white':'black'}}>Your text summary</h2>
        <p style ={{color: props.mode=== 'dark'?'white':'black'}}>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p style ={{color: props.mode=== 'dark'?'white':'black'}}>{text.split(" ").length * 0.008} minutes read</p>
        <h2 style ={{color: props.mode=== 'dark'?'white':'black'}}>Preview</h2>
        <p style ={{color: props.mode=== 'dark'?'white':'black'}}>{text}</p>
      </div>
    </>
  );
}
