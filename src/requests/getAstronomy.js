import axios from "axios";

const data = [];

const getAstronomy = async (setAllQuestions) => {
  const endpoint = "https://jservice.io/api/category?id=17";

  await axios
    .get(endpoint)
    .then((res) => {
      const random = Math.floor(Math.random() * res.data.clues_count);
      data.push({
        question: res.data.clues[random].question,
        category: res.data.title,
        answer: res.data.clues[random].answer,
      });
      const astronomyQuestions = data;
      setAllQuestions(astronomyQuestions);
      console.log(astronomyQuestions);
    })
    .catch((err) => {
      console.log(`${err} <---- error`);
    });
};

export default getAstronomy;
