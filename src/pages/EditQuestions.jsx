import { useEffect } from "react";
import { useQuestions } from "../context/useQuestions";
import styles from "./EditQuestions.module.css";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import AddQuestions from "../components/AddQuestions/AddQuestions";
import Button from "../components/etc/Button";

function EditQuestions() {
  const { questions, mFetchQuestions, isLoading } = useQuestions();

  const { questionId } = useParams();

  useEffect(() => {
    mFetchQuestions(questionId);
  }, [mFetchQuestions, questionId]);

  function handleSubmit() {}

  function handleChange() {}

  function handleClick() {}

  function handleDelete() {}

  console.log(isLoading);

  if (isLoading) return <Loading />;

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
          value={questions.name}
          onChange={handleChange}
        />
        {questions.questions.map((question, i) => (
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

export default EditQuestions;
