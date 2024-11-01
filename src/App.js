// App.js
import React from "react";
import SplineModel from "./components/SplineModel";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="overlay">
        <h1>Biswayan Mehra</h1>
        <div className="description">
          <p>Final-year Computer Science undergrad</p>
          <p>Competitive Coder & AI Enthusiast</p>
          <div className="bio">
            I love exploring technology, developing new skills, and pushing
            the boundaries of what's possible in the digital world!
          </div>
        </div>
      </div>
      <SplineModel />
    </div>
  );
};

export default App;
