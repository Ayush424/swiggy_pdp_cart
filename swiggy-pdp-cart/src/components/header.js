import React from 'react';
import swiggyLogo from '../images/swiggyLogo.png';

export default function Header(){
    return (
        <header className='header'> 
               <img src={swiggyLogo} alt="Swiggy Logo"/>
        </header>
    );
}