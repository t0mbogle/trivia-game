import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import QuestionsContext from "../utils/QuestionsContext";

function StartQuiz() {
  const { numOfQuestions, allQuestions } = useContext(QuestionsContext);

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (allQuestions.length > 1) {
      navigate("/questions");
    }
  };

  return (
    <div>
      <h1 className="text-[#7D83FF] text-3xl">Trivia Game</h1>
      <Form />
      <p>Questions for the next game: {numOfQuestions}</p>
      <button type="button" onClick={handleStartQuiz} className="btn m-4">
        Start
        {/* Start button should make the API call. If unsuccessful, render error message below */}
      </button>
    </div>
  );
}

export default StartQuiz;
