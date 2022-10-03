import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/App.css";
import StartQuiz from "./StartQuiz";
import Questions from "./Questions";
import EndQuiz from "./EndQuiz";
import QuestionsContext from "../utils/QuestionsContext";

function App() {
  const [numOfQuestions, setNumOfQuestions] = useState(5);

  return (
    <div className="h-screen bg-[#272838] flex flex-col items-center justify-center text-center">
      <h1 className="text-[#7D83FF] text-3xl">Trivia Game</h1>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <QuestionsContext.Provider value={{ numOfQuestions, setNumOfQuestions }}>
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
