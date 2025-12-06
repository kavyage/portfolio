import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Footer from "./components/Footer";
import Contact from "./components/Collab";
import { Toaster } from "react-hot-toast";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <TechStack />
        <Collab />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
