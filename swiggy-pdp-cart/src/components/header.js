import React from 'react';
import swiggyLogo from '../images/swiggyLogo.png';
import profile from '../images/profile.png'

export default function Header(props){
    return (
        <header className='header'> 
               <img src={swiggyLogo} alt="Swiggy Logo"/>
               <div className='user'>
                   <img src={profile} alt="Profile"/>
                   <p>{props.userName}</p>
               </div>
        </header>
    );
}