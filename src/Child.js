import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  function handleClick(){
    const newColor =getRandomColor()
    onChangeColor(newColor)//this onChangeColor changes parent color
  }
 
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color}} />;  /* this color changes child color */
}

export default Child;
