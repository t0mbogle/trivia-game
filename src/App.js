import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StartQuiz from "./components/StartQuiz";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <Routes>
        <Route exact path="/" element={<StartQuiz />} />
        <Route exact path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
