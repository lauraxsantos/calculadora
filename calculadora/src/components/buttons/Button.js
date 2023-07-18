import React from "react"
import "./button.css"
export default function Button({textButton, operation, type}){

    
    
    return(
        <button className={type} onClick={operation} value={textButton}>{textButton}</button>
    )
}