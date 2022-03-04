import React, { useState } from 'react'
import "../style.css"

function Card(props) {
  const [btnTextState, setBtnTextState] = useState("Add to favorite")
  const [bgClass, setBgClass] = useState("")
  function addToFav() {
    // console.log("happy");
    setBtnTextState((prevState)=>{
      if (prevState==="Add to favorite"){
        return "Added to favorite"
      }else {
        return "Add to favorite"
      }
    });
    setBgClass((prevClass)=>{
        if (prevClass===""){
           return "active"
        }
        else{
            return ""
        }
    })
    
  }
  return (
          <div className={`card ${bgClass}`} key={props.cardContents.id} >
              <div className='img-container'>
                <img src={props.cardContents.imgSrc} alt='image'/>
              </div>
              <div className="content">
                <h3>name:{props.cardContents.name}</h3>
                <p>{props.cardContents.description}</p>
              </div>
              <a className="button" onClick={addToFav}>{btnTextState}</a>
          </div>
  ) 
}

export default Card