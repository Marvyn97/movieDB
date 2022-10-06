import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import './App.css';
import Home from "./Pages/Home/Home";
import Favorite from "./Pages/Favorite/Favorite";

function App() {
  return (
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/coup-de-coeur" element={<Favorite /> } />
     <Route path="*" element={<Home />} /> // a changé plus tard en page404
    </Routes>
   </BrowserRouter>
  );
}

export default App;
