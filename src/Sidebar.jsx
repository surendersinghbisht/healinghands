import React from "react";
import { ImCancelCircle } from "react-icons/im";


function Sidebar(props) {
  return (
   <div className="shadow-2xl absolute  top-2 right-0  ">
<div className="sm:hidden block  flex justify-end w-screen ">
<aside className=" " aria-label="Sidebar ">

<div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 ">
<ul className="space-y-2">
<ImCancelCircle className=" mt-2 font-semibold h-4  w-4 mr-2  sm:hidden block flex ml-80 mb-6 " onClick={props.onCancel}></ImCancelCircle>
<li>
<a href="#" className="flex items-center  p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white hover:text-yellow-500 dark:hover:bg-gray-700">
<span className=" font-bold ml-72">HOME</span>
</a>
</li>
<hr />
<li>
<a href="#" className="flex items-center p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span className="flex-1 text-right whitespace-nowrap hover:text-yellow-400 font-bold">ABOUT</span>
</a>
</li>
<hr />
<li>
<a href="#" class="flex items-center p-2 text-base font-custom text-gray-700 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span class="flex-1 text-right  whitespace-nowrap hover:text-yellow-400 font-bold">PROJECTS</span>
</a>
</li>
<hr />
<li>
<a href="#" class="flex items-center p-2 text-base font-custom text-gray-700 rounded-lg dark:text-white  dark:hover:bg-gray-700">
<span class="flex-1 text-right whitespace-nowrap hover:text-yellow-400 font-bold font-bold">CONTACT</span>
</a>
</li>

</ul>
</div>
</aside>
</div>
</div>
  );
}

export default Sidebar;