import React from "react";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Navbar from "./Navbar";
import Social from "./Social";
import Projects from "./Projects";
import Donation from "./Donation";

function MainPage() {
  return (
    <div>    
<Navbar ></Navbar>
<Home></Home>
<Aboutus></Aboutus>
<Projects></Projects>
<Donation></Donation>
<Social></Social>
</div>
  );
}

export default MainPage;
