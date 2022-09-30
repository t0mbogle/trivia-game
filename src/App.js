import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import StartQuiz from "./components/StartQuiz";
import Questions from "./components/Questions";
import EndQuiz from "./components/EndQuiz";
import QuestionsContext from "./utils/QuestionsContext";

function App() {
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <QuestionsContext.Provider value={(numOfQuestions, setNumOfQuestions)}>
        <Routes>
          <Route exact path="/" element={<StartQuiz />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path="/end-quiz" element={<EndQuiz />} />
        </Routes>
      </QuestionsContext.Provider>
    </div>
  );
}

export default App;
