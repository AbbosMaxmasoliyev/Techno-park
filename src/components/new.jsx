import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function New(props) {
  const [ekran, setDisplay] = useState("none");

  return (
      
      <div className="new">
                <img src={props.image} alt="" />
                <p className="some_text">{props.some_text}</p>
                <button type="button" onClick={() => {
                    if (ekran=="none") {
                        setDisplay("block")
                    }else{
                        setDisplay("none")
                    } }}>batafsil</button>
               
                <p style={{display:ekran}}id="text">{props.text}</p> 
    </div>
  )
}


