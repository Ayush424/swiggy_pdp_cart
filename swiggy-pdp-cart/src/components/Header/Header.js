import React from 'react';
import swiggyLogo from './images/swiggyLogo.png';
import headerCSS from './header.module.css'
export default function Header(){
    return (
        <header className={headerCSS.header}> 
               <img src={swiggyLogo} alt="Swiggy Logo"/>
        </header>
    );
}