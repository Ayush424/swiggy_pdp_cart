import React from "react";
import BannerCSS from './banner.module.css'
export default function Banner({img,heading,alt}){
    return(
        <div className={BannerCSS.banner}>
            <img src={img} alt={alt}/>
            <h1>{heading}</h1>
        </div>
    );
}