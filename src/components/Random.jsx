import React, { useEffect, useState } from 'react'

const Random = () => {

  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex")

  const colorType = (colortype) => {

    setTypeOfColor(colortype)
    console.log(typeOfColor)
  }

  const randomUtility = (len) => {

    return Math.floor(Math.random() * len);
  }

  const randomHexColor = () => {
    const hex = [1, 2, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hes = "#"

    for (var i = 0; i < 6; i++) {
      hes += hex[randomUtility(hex.length)]
    }

    setColor(hes);

    console.log(hes)
  }

  const randomRGBColor = () => {
   
    const a = randomUtility(256);
    const b = randomUtility(256);
    const c = randomUtility(256);
    
    const rgb = `rgb(${a}, ${b}, ${c})`;

    console.log(rgb)

    setColor(rgb);
  }

  useEffect(()=>{
     if(typeOfColor === "rgb"){
      randomRGBColor()
     }
     else{
      randomHexColor()
     }
  }, [typeOfColor])

  return (
    <div style={{ backgroundColor: color, width: "100vw", height: "100vh", display: "flex", alignItems: "center"
    , flexDirection:"column"}}>
      <div className="container" >
        <button onClick={() => colorType("hex")}>Hex Color</button>
        <button onClick={() => colorType("rgb")}>RGB color</button>
        <button onClick={typeOfColor === "hex" ? randomHexColor : randomRGBColor}>Change color </button>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontSize:"60px",
      marginTop:"50px", color:"#fff", flexDirection:"column"}}>
       <h3>{typeOfColor === "rgb"?"RGB Color":"HEX Color"}</h3>
       <h1>{color}</h1>
      </div>
    </div>
  )
}

export default Random