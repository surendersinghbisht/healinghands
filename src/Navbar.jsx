import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HashLink as Link } from 'react-router-hash-link';
import Sidebar from "./Sidebar";
import Button from "./Button";

function Navbar() {

  const [sideBarShow, setSideBarShow] = React.useState(false);


  return (
    <>
    <div className=" bg-white sticky  top-0 drop-shadow-2xl sm:h-20 p-4 sm:p-0 z-10  ">
      <div className="sm:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className=" sm:p-4 flex items-center sm:space-x-4 space-x-2  ">
            <img
              className="sm:w-12 sm:h-12 h-8 w-8 sm:ml-8  ml-2 rounded-full sm:mt-1"
              src="/images/healingPic.jpg"
            />

            <p className="font-sans sm:mt-3 sm:mb-3 sm:text-lg text-sm font-bold sm:font-extrabold mt-1  tracking-wider ">
              HEALING HANDS
            </p>
          </div>
          <GiHamburgerMenu
            className=" mr-2 w-8 sm:hidden block "
            onClick={() => setSideBarShow(true)}
          />
        </div>

        <div className=" sm:space-x-16 mr-16  hidden sm:block ">
          <div className=" space-x-10 flex mt-4">
            <Link
              to="#Home"
              smooth
              className="font-sans  text-base font-bold hover:text-purple-700 tracking-wider"
            >
              HOME
            </Link>
            <Link
              to="#Aboutme"
              smooth
              className=" font-sans  text-base font-bold hover:text-purple-700 tracking-wider"
            >
              ABOUT
            </Link>
            {/* <Link
              to="/live"
              className="font-custom font-extrabold text-base hover:text-yellow-400 tracking-wider"
            >
              LIVE 
            </Link> */}
            {/* <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full -ml-6 rounded-full bg-blue-500 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500 -ml-6"></span>
</span> */}
            <Link
              to="#Social"
              smooth
              className="font-custom  text-base font-bold hover:text-purple-700 tracking-wider"
            >
              CONTACT
            </Link>

            <Link
            to="#donation"
            smooth
            className="font-custom  text-base font-bold hover:text-purple-700 tracking-wider">
              DONATION
            </Link>

            {/* <div className="ml-4 mb-2">
              <Link to='/registerPage'><Button>Register</Button></Link>
            
            </div> */}
          
          </div>
         
        </div>
      </div>
     
        
      </div>
      <div className="z-20 top-0 right-0 fixed">
      <Transition show={sideBarShow} 
          enter="transition-transform duration-500"
          enterFrom=" -translate-y-full"
          enterTo=" -translate-y-0"
          leave="transition-transform duration-500"
          leaveFrom="-translate-y-0"
          leaveTo=" -translate-y-full"
          >
          {/* <Dialog open={sideBarShow} onClose={setSideBarShow}>
            <Dialog.Overlay> */}
              <Sidebar onCancel={() => setSideBarShow(false)} />
            {/* </Dialog.Overlay>
          
          </Dialog> */}
          </Transition>
          </div>
    </>
  
  );
}

export default Navbar;
