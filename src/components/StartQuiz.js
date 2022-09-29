import React from "react";
import { useNavigate } from "react-router-dom";

function StartQuiz() {
  const navigate = useNavigate();

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
          <select>
            <option value="10">10</option>
          </select>
        </label>
      </form>
      <button type="button" onClick={handleStartQuiz}>
        Start
      </button>
    </div>
  );
}

export default StartQuiz;
