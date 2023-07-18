import React from "react"
import "./display.css"
export default function Display({result, m}){

    return(
        <div className="display">
            <h4>{m ? "M" : ""}</h4>
            <div className="result">
                {result}
            </div>
        </div>
    )
}