import React, { useEffect, useState } from "react";
import "./nav.css"

export default function Nav(){
    const [show, setShow] = useState(false);
    function transitionNavBar(){
        if(window.scrollY > 100){
            setShow(true);
        }else{
            setShow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () =>window.removeEventListener("scroll", transitionNavBar);
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__container">
            <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/>        
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar"/>
            </div>
        </div>
    )
};