import React from "react";


function Button(props) {
  return (
   <div>
       <button onClick={props.onClick}  className="transition ease-in-out delay-75 hover:bg-yellow-300  hover:-translate-y-1 hover:scale-100  duration-400 tracking-widest shadow-sm bg-gradient-to-r from-purple-700  to-purple-500 py-3 rounded-md px-16 font-sans text-base font-semibold">
{props.children} 
       </button>
    </div>
  );
}

export default Button;
