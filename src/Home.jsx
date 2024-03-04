import React from "react";
import Button from "./Button";
import {HashLink as Link} from 'react-router-hash-link';
import {IoIosArrowDown} from 'react-icons/io'

function Home() {
  return (
   <div id="Home">
    <div className="sm:h-screen h-full sm:p-28 p-4 bg-[url('/images/animal.jpg')]"  >
      <div className="space-y-10 sm:space-y-16 flex flex-col  items-center pb-14">
<p className="font-extrabold font-sans tracking-wide pt-20 sm:pt-6 text-4xl  sm:text-6xl text-center sm:text-center text-white ">HEALING <span className="text-purple-700">HANDS</span></p>
<p className="font-sans  text-lg sm:text-xl sm:px-20 tracking-wider text-center text-white">Healing Hands <span className="text-purple-700">is a stray animal rescue,</span> and an awareness organization,  <span className="text-purple-700">working to help animals heal and be heard.</span> 
</p>
<Link to='#Projects' smooth><Button>PROJECTS</Button></Link>
</div>
<div className="flex justify-center animate-bounce  sm:mt-16">
<Link to='#Aboutme' smooth><IoIosArrowDown className="h-8 w-8 text-white"/></Link>
</div>
</div> 
    </div>
  );
}

export default Home;
