import React from 'react'
import './Buttonstyle.css'

const Buttonindex = ({ text, onClick, outlined }) => {
  return (
    <button className={outlined ? "outline-btn" : "btnindex"} onClick={onClick}>
      {text}
    </button>
  );
};


export default Buttonindex;