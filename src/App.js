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
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuestionsContext.Provider value={{ numOfQuestions, setNumOfQuestions }}>
      <div className="App">
        <h1>Trivia Game</h1>
        <Routes>
          <Route exact path="/" element={<StartQuiz />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path="/end-quiz" element={<EndQuiz />} />
        </Routes>
      </div>
    </QuestionsContext.Provider>
  );
}

export default App;
