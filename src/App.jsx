import React from "react";
import { BrowserRouter } from "react-router-dom";
import Live from "./Live";
import { Route, Routes } from "react-router-dom";
import MainPage from "./mainPage";
import RegisterPage from "./RegisterPage";
import Donation from "./Donation";


function App() {
  return (
    <BrowserRouter>
    <div>    
<Routes>
  <Route index element={<MainPage />}></Route>
<Route path="/live" element={<Live />}></Route>
<Route path="/mainPage" element={<MainPage />}></Route>
<Route path="/donation" element={<Donation />} ></Route>
<Route path="/registerPage" element={<RegisterPage />}></Route>
</Routes>
</div>
</BrowserRouter>
  );
}

export default App;
