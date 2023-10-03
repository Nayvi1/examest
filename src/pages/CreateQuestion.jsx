import { useEffect, useState } from "react";
import AddQuestions from "../components/AddQuestions/AddQuestions";
import Button from "../components/etc/Button";
import styles from "./CreateQuestion.module.css";
import { useQuestions } from "../context/useQuestions";
import { useNavigate } from "react-router-dom";

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
  const { postQuestion } = useQuestions();
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();

    setQuestionList((prev) => {
      return {
        ...prev,
        questions: [
          ...prev.questions,
          {
            id: Math.floor(Math.random() * 99999),
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
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    postQuestion(questionList);
    navigate("/teacher");
  }

  function handleDelete(e, id) {
    e.preventDefault();
    console.log();

    setQuestionList((prev) => {
      const allTheQuestions = [...prev.questions];
      const filteredQuestions = allTheQuestions.filter((question) => {
        return question.id !== id;
      });
      return {
        ...prev,
        questions: filteredQuestions,
      };
    });
  }

  function handleChange(e, index) {
    const { name, value } = e.target;

    setQuestionList((prev) => {
      if (name === "name") {
        return {
          ...prev,
          name: value,
        };
      } else if (name === "question") {
        const updatedQuestions = [...prev.questions]; // Create a copy of questions array
        updatedQuestions[index] = {
          ...updatedQuestions[index],
          question: value, // Update the question property
        };

        return {
          ...prev,
          questions: updatedQuestions, // Update the questions array
        };
      } else {
        const updatedOptions = [...prev.questions];

        updatedOptions[index].options[parseInt(name)] = {
          ...updatedOptions[index].options[parseInt(name)],
          option: value,
        };

        return {
          ...prev,
          questions: updatedOptions,
        };
      }
    });
  }

  useEffect(() => {
    function handleReload(event){
      event.returnValue = "you will lose your questions if you reload";

    }
    window.addEventListener("beforeunload", handleReload);
    return()=>{
      
      window.removeEventListener("beforeunload", handleReload);
    }
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
          <Button handleClick={handleClick} width="100px">
            new Question
          </Button>
          <Button>Create</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestion;
