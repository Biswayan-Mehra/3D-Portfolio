// App.js
import React from "react";
import SplineModel from "./components/SplineModel";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Your Portfolio</h1>
        <p>Interactive 3D Experience</p>
      </div>
      <SplineModel />
    </div>
  );
};

export default App;
