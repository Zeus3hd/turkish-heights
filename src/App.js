import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Gallery />
    </div>
  );
}

export default App;
