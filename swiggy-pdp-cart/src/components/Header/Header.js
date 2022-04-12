import React from 'react';
import swiggyLogo from '../../images/swiggyLogo.png';
import HeaderCSS from './header.module.css'
export default function Header(){
    return (
        <header className={HeaderCSS.header}> 
               <img src={swiggyLogo} alt="Swiggy Logo"/>
        </header>
    );
}