import React from "react";
import momos from "./images/momos.jpg"

export default function Banner(){
    return(
        <div className="banner">
            <img src={momos} alt="Momos"/>
            <h1>Punjabi Momos</h1>
        </div>
    );
}