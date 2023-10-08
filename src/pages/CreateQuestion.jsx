import { useEffect, useState } from "react";
import AddQuestions from "../components/AddQuestions/AddQuestions";
import Button from "../components/etc/Button";
import styles from "./CreateQuestion.module.css";
import { useQuestions } from "../context/useQuestions";
import { useNavigate } from "react-router-dom";
import handleInputChange from "../utils/handleInputChange";
import handleInputDelete from "../utils/handleInputDelete";
import handleAddQuestion from "../utils/handleAddQuestion";

const initState = {
  name: "",
  questions: [
    {
      id: 15468,
      question: "",
      options: [
        {
          option: "",
          isTrue: true,
        },
        {
          option: "",
          isTrue: false,
        },
        {
          option: "",
          isTrue: false,
        },
        {
          option: "",
          isTrue: false,
        },
      ],
    },
  ],
};

function CreateQuestion() {
  const [questionList, setQuestionList] = useState(initState);
  const { postQuestion, setQuestions, isLoading } = useQuestions();
  const navigate = useNavigate();
  function handleClick(e) {
    handleAddQuestion(e, setQuestionList);
  }

  function handleSubmit(e) {
    e.preventDefault();

    postQuestion(questionList).then(() => {
      navigate("/teacher");
    });
  }

  function handleDelete(e, id) {
    handleInputDelete(e, id, setQuestionList);
  }

  function handleChange(e, index) {
    handleInputChange(e, index, setQuestionList);
  }

  useEffect(() => {
    function handleReload(event) {
      event.returnValue = "you will lose your questions if you reload";
    }
    window.addEventListener("beforeunload", handleReload);
    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  });

  useEffect(() => {
    return () => {
      setQuestions(undefined);
    };
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">QuizName:</label>
        <input
          type="text"
          name="name"
          id="text"
          required
          autoComplete="off"
          value={questionList.name}
          onChange={handleChange}
        />
        {questionList.questions.map((question, i) => (
          <AddQuestions
            key={`${i}-question`} // Use 'i' as the key, as it's an array index
            question={question}
            onChange={handleChange}
            onClick={handleDelete}
            index={i}
          />
        ))}

        <div className={styles.btnContainer}>
          <Button isDisable={isLoading} handleClick={handleClick} width="100px">
            new Question
          </Button>
          <Button isDisable={isLoading}>Create</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestion;
