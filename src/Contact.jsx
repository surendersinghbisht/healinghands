

import React from "react";
import Button from "./Button";


function Contact() {


  return (
<div className="static" id="contact">
<div class=" h-full static sm:h-full sm:pt-6 p-4 sm:px-80  bg-[url('https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg')]">
<div className="flex flex-col items-center space-y-4 mt-6 sm:pt-12  static">
<p className="font-extrabold font-custom tracking-wide  text-3xl  sm:text-4xl  text-center sm:text-center ">CONTACT</p>
<p className="border-4 border-yellow-400  w-10  rounded-lg"></p></div>
<div className="p-4 pt-6 text-center static">
<p className="font-custom text-gray-800 text-lg sm:text-xl">you can Contact me by submitting the form below.</p>
</div>

<div className="bg-white static drop-shadow-2xl p-6 rounded-lg space-y-6 sm:p-10 sm:mt-10">
  <div>
  <h1 className="font-custom  text-gray-500 font-bold text-sm pb-2">Name</h1>
<input maxLength={30} type="text" required className="border border-gray-200 w-full rounded-lg py-2 bg-gray-100 p-2 placeholder:text-gray-400 font-semibold" placeholder="Enter your name"></input>
</div>


<div>
<h1 className="font-custom  text-gray-500 font-bold text-sm pb-2">Email</h1>
<input type="email" required className="border border-gray-200 w-full rounded-lg py-2 bg-gray-100 p-2 placeholder:text-gray-400 font-semibold" placeholder="Enter your name"></input>
</div>
<div>
  <h1 className="font-custom  text-gray-500 font-bold text-sm pb-2">Message</h1>
<input maxLength={150} required type="text"  className="border border-gray-200 w-full rounded-lg  bg-gray-100 h-40 p-2 placeholder:text-gray-400 font-semibold" placeholder="Enter your message"></input>
</div>

<div className="flex justify-end sm:pt-4">
<Button >SUBMIT</Button>
</div>
</div>

</div>
</div>


  );
}

export default Contact;
