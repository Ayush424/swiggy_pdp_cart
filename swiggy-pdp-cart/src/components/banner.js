import React from "react";

export default function Banner({img,heading,alt}){
    return(
        <div className="banner">
            <img src={img} alt={alt}/>
            <h1>{heading}</h1>
        </div>
    );
}