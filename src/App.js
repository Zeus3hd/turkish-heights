import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
