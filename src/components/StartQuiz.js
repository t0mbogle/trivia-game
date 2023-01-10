import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import QuestionsContext from "../utils/QuestionsContext";

function StartQuiz() {
  const { allQuestions } = useContext(QuestionsContext);

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (allQuestions.length !== 0) {
      navigate("/questions");
    }
  };

  return (
    <div>
      <h1 className="text-[#7D83FF] text-3xl">Trivia Game</h1>
      <div className="flex items-center border-2 rounded-lg border-[#7D83FF] p-4 mt-3">
        <div className="p-4">
          <Form />
        </div>
        <div className="p-4">
          <p>Questions for quiz: {allQuestions.length}</p>
          <button type="button" onClick={handleStartQuiz} className="btn m-4">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
