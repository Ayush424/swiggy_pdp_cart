import React from "react";
import chaap from "./images/chaap.jpg"
import momos from "./images/momos.jpg"

export default function Banner(props){
    const heading =(props.restaurant==="PunjabiMomos")?'Punjabi Momos':'Punjabi Chaap'; 
    const image=(props.restaurant==="PunjabiChaap")?chaap:momos;
    return(
        <div className="banner">
            <img src={image} alt="Momos"/>
            <h1>{heading}</h1>
        </div>
    );
}