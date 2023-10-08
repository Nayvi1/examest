import { useEffect, useState } from "react";
import { useQuestions } from "../context/useQuestions";
import styles from "./EditQuestions.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import AddQuestions from "../components/AddQuestions/AddQuestions";
import Button from "../components/etc/Button";
import Error from "../components/Error/Error";
import handleInputChange from "../utils/handleInputChange";
import handleInputDelete from "../utils/handleInputDelete";
import handleAddQuestion from "../utils/handleAddQuestion";

function EditQuestions() {
  const {
    fetchQuestions,
    isLoading,
    error,
    editQuestion,
    setQuestions,
    removeQuestion,
  } = useQuestions();
  const [questionList, setQuestionList] = useState();
  const { questionId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions(questionId).then((data) => {
      setQuestionList(data);
    });
  }, [fetchQuestions, questionId]);

  function handleSubmit(e) {
    e.preventDefault();

    editQuestion(questionList, questionId).then(() => {
      navigate("/teacher");
    });
  }

  function handleChange(e, index) {
    handleInputChange(e, index, setQuestionList);
  }

  function handleClick(e) {
    handleAddQuestion(e, setQuestionList);
  }

  function handleDelete(e, id) {
    handleInputDelete(e, id, setQuestionList);
  }

  function handleQuestionListDelete(e) {
    e.preventDefault();

    removeQuestion(questionId).then(() => {
      navigate("/teacher");
    });
  }

  useEffect(() => {
    return () => {
      setQuestions(undefined);
    };
  });

  if (isLoading) return <Loading />;

  if (error) return <Error message={error} />;
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
          value={questionList ? questionList.name : ""}
          onChange={handleChange}
        />
        {questionList
          ? questionList.questions.map((question, i) => (
              <AddQuestions
                key={`${i}-question`} // Use 'i' as the key, as it's an array index
                question={question}
                onChange={handleChange}
                onClick={handleDelete}
                index={i}
              />
            ))
          : null}

        <div className={styles.btnContainer}>
          <Button isDisable={isLoading} handleClick={handleClick} width="100px">
            new Question
          </Button>
          <Button isDisable={isLoading} handleClick={handleQuestionListDelete}>
            Delete
          </Button>
          <Button isDisable={isLoading}>Edit</Button>
        </div>
      </form>
    </div>
  );
}

export default EditQuestions;
