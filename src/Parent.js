import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor ] = useState("#00ffaa")

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor) //update color state to a new value. no = sign...
    console.log ("parent color:",color)
    setChildrenColor(newChildColor)
    console.log("childrenColor: ",childrenColor)

  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor ={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
