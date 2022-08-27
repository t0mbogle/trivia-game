import axios from "axios";

const getQuestion = (setQuestion, setAnswer, setCategory) => {
  const endpoint = "http://jservice.io/api/random";

  axios
    .get(endpoint)
    .then((res) => {
      const { question } = res.data[0];
      const { answer } = res.data[0];
      const { title } = res.data[0].category;
      setQuestion(question);
      setAnswer(answer);
      setCategory(title);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getQuestion;
