import React from "react";
import Hero from "./components/hero/Hero";
import "../src/"
import Navbar from "./components/navbar/Navbar";
import Data from "./components/data/Data";


function App() {
  return (
    <>
    <Navbar/>
     <Hero />
     <Data/>
    </>
  );
}

export default App;
