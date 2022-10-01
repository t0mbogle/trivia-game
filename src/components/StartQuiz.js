import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuestionsContext from "../utils/QuestionsContext";

function StartQuiz() {
  const navigate = useNavigate();

  const { numOfQuestions, setNumOfQuestions } = useContext(QuestionsContext);

  const handleStartQuiz = () => {
    navigate("/questions");
  };

  return (
    <div>
      <form>
        <label htmlFor="category">
          Category
          <select>
            <option value="general">General</option>
          </select>
        </label>
        <label htmlFor="number of questions">
          Number of Questions
          <select onChange={(e) => setNumOfQuestions(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </form>
      <p>Questions for the next game: {numOfQuestions} </p>
      <button type="button" onClick={handleStartQuiz}>
        Start
      </button>
    </div>
  );
}

export default StartQuiz;
