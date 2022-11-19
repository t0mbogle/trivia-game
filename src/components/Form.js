import React, { useState, useContext } from "react";
import axios from "axios";
import QuestionsContext from "../utils/QuestionsContext";

function Form() {
  const [id, setId] = useState("Random");

  const ASTRONOMY = 17;
  const LANDMARKS = 112;
  const AUTOMOBILES = 5;
  const WEATHER = 19;
  const ZOOLOGY = 54;

  const { numOfQuestions, setNumOfQuestions, allQuestions } =
    useContext(QuestionsContext);

  const getCategoryQuestion = async () => {
    await axios
      .get(`https://jservice.io/api/category?id=${id}`)
      .then((res) => {
        const random = Math.floor(Math.random() * res.data.clues_count);
        const astronomyData = {
          question: res.data.clues[random].question,
          answer: res.data.clues[random].answer,
          category: res.data.title,
        };
        allQuestions.push(astronomyData);
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
      getRandomQuestion();
      count += 1;
    }
    while (id !== "Random" && count < numOfQuestions) {
      getCategoryQuestion();
      count += 1;
    }
  };

  return (
    <>
      <form className="flex flex-col border-2 border-[#7D83FF] rounded-xl my-4">
        <div className="pt-4">
          <label htmlFor="category">
            Category
            <select
              className="text-black ml-2"
              onChange={(e) => setId(e.target.value)} // This will be set to 'Random' or a number value
            >
              <option value="Random">Random</option>
              <option value={`${ASTRONOMY}`}>Astronomy</option>
              <option value={`${LANDMARKS}`}>Landmarks</option>
              <option value={`${AUTOMOBILES}`}>Automobiles</option>
              <option value={`${WEATHER}`}>Weather</option>
              <option value={`${ZOOLOGY}`}>Zoology</option>
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
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>
        <div className="pb-4">
          <button className="btn" type="button" onClick={filter}>
            Get Questions
          </button>
        </div>
      </form>
      {/* { <p>Fetching data... </p> } */}
    </>
  );
}

export default Form;
