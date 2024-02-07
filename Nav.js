import React, { useEffect, useState } from 'react';
import './nav.css';

const Nav = () => {
    const [show,handleshow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleshow(true);
            }else handleshow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[])
  return (
    <div className={`Nav ${show && "Nav_black"}`}>
        <img className='Nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png'alt=''/>
        <img className='Nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'alt=''/>
   </div>
  )
}

export default Nav
