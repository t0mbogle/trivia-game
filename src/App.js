import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StartQuiz from "./components/StartQuiz";
import Questions from "./components/Questions";
import EndQuiz from "./components/EndQuiz";

function App() {
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <Routes>
        <Route exact path="/" element={<StartQuiz />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/end-quiz" element={<EndQuiz />} />
      </Routes>
    </div>
  );
}

export default App;
