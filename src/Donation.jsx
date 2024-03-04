import React from "react";
import P1 from "./P1";
import Button from "./Button";
import Myskills from "./Myskills";
import {HashLink as Link} from 'react-router-hash-link';

function Donation() {
  return (
    <div id='donation'>
<div className="p-4 pt-20 sm:pt-10  sm:px-60">
{/*  */}
  <div className="flex flex-col items-center space-y-4">
<p className="font-extrabold font-sans tracking-wide sm:pt-20 text-3xl  sm:text-4xl  text-center sm:text-center ">Donate for needy</p>

<p className="border-4 border-purple-700  w-10  rounded-lg"></p></div>
<div className="text-center pt-8">
<P1 className=" sm:font-bold text-center sm:text-lg  ">donate for helpless animals!</P1>
</div></div>
<div className="sm:p-16 p-4 pt-16 sm:pt-16">
<div className="sm:flex sm:space-x-20 ">
  <div className="flex flex-col">
  <div className="space-y-4 sm:max-w-6xl ">
  <p className="font-sans text-2xl  font-semibold text-left">Get to know us!!</p>
  {/* <P1 className="text-center sm:text-left pt-8">asd<span className="text-gray-600 font-bold font-sans"> dev</span> building <span className="text-gray-600 font-bold font-custom">Projects</span> section.</P1>
  <P1>I discovered <span className="text-gray-600 font-bold font-sans"></span></P1> */}
<P1 className="text-center sm:text-left"><span className="text-gray-600 font-bold font-sans">HEALING HANDS</span> It's our understanding that involuntary physical suffering is an absolute bad across all species; so reducing suffering, and nurturing changes that reduce suffering is absolutely <span className="text-gray-600 font-bold font-custom"> good.</span>  </P1>
</div>
<div className="sm:mt-12 mt-10">
<Link to="#Social" smooth><Button >CONTACT</Button></Link>
</div></div>
<Myskills ></Myskills>
</div>
</div>
</div>
  );
}

export default Donation;
