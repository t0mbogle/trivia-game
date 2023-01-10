import React, { useState, useContext } from "react";
import axios from "axios";
import QuestionsContext from "../utils/QuestionsContext";

function Form() {
  const [id, setId] = useState("Random");

  const ANIMALS = 109;
  const ASTRONOMY = 13;
  const AUTOMOBILES = 23;
  const HISTORY = 22;
  const SCIENCE = 135;
  const SPORTS = 81;
  const WEATHER = 36;

  const { numOfQuestions, setNumOfQuestions, allQuestions, setAllQuestions } =
    useContext(QuestionsContext);

  const getCategoryQuestion = async () => {
    await axios
      .get(`https://jservice.io/api/category?id=${id}`)
      .then((res) => {
        const random = Math.floor(Math.random() * res.data.clues_count);
        const categoryData = {
          question: res.data.clues[random].question,
          answer: res.data.clues[random].answer,
          category: res.data.title,
        };
        allQuestions.push(categoryData);
        console.log(allQuestions);
      })
      .catch((err) => {
        console.log(`${err} <---- error`);
      });
  };

  const getRandomQuestion = async () => {
    await axios
      .get("http://jservice.io/api/random")
      .then((res) => {
        const randomData = {
          question: res.data[0].question,
          answer: res.data[0].answer,
          category: res.data[0].category.title,
        };
        allQuestions.push(randomData);
        console.log(allQuestions);
      })
      .catch((err) => {
        console.log(`${err} <---- error`);
      });
  };

  const filter = () => {
    let count = 0;
    while (id === "Random" && count < numOfQuestions) {
      getRandomQuestion(); // setAllQuestions([...allQuestions, getRandomQuestion()]), have a function returning?
      count += 1;
    }
    while (id !== "Random" && count < numOfQuestions) {
      getCategoryQuestion();
      count += 1;
    }
  };

  const clearData = () => {
    setAllQuestions([]);
  };

  return (
    <>
      <form className="flex flex-col border-2 border-[#7D83FF] rounded-xl p-3 my-4">
        <div className="pt-4">
          <label htmlFor="category">
            Category
            <select
              className="text-black ml-2"
              onChange={(e) => setId(e.target.value)} // This will be set to 'Random' or a number value
            >
              <option value="Random">Random</option>
              <option value={`${ANIMALS}`}>Animals</option>
              <option value={`${ASTRONOMY}`}>Astronomy</option>
              <option value={`${AUTOMOBILES}`}>Automobiles</option>
              <option value={`${HISTORY}`}>History</option>
              <option value={`${SCIENCE}`}>Science</option>
              <option value={`${SPORTS}`}>Sports</option>
              <option value={`${WEATHER}`}>Weather</option>
            </select>
          </label>
        </div>
        <div className="p-4">
          <label htmlFor="number of questions">
            Number of Questions
            <select
              className="text-black ml-2"
              onChange={(e) => setNumOfQuestions(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
        <div className="pb-4">
          <button
            type="button"
            onClick={filter}
            className={allQuestions.length !== 0 ? "disabled-btn" : "btn"}
          >
            Get Questions
          </button>
          <button
            type="button"
            onClick={clearData}
            className={allQuestions.length !== 0 ? "btn" : "disabled-btn"} // needs to rerender to change.
          >
            Clear {allQuestions.length}
          </button>
        </div>
      </form>
      {/* { <p>Fetching data... </p> } */}
    </>
  );
}

export default Form;
