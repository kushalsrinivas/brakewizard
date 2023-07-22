import React, { useState } from "react";
import logo from '../public/logo.png';
import { Typewriter } from 'react-simple-typewriter'
 
const Header  = ()=>{
    return (<>
        <div className="z-50 sticky top-0 w-full h-24 self-center justify-center text-center  snap-center items-center p-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
            <h1 className="self-center justify-center text-center font-mono font-bold text-lg ">
            <Typewriter 
            words={['BRAKEWIZARD ', 'PHOTOGRAPHY ', 'VIDEOGRAPHY ', 'WALLPAPERS' , 'DM FOR SHOOT']} 
            typeSpeed = {60}
            deleteSpeed={30}
            loop = {0}
            />
            </h1>
        </div>
    </>)
}
export default Header;