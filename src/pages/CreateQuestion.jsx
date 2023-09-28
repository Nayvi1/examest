import AddQuestions from "../components/AddQuestions/AddQuestions";
import Button from "../components/etc/Button";
import styles from "./CreateQuestion.module.css";

function CreateQuestion() {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor="name">QuizName:</label>
        <input type="text" id="text" autoComplete="off" />

        <AddQuestions />
        <AddQuestions />
        <AddQuestions />
        <AddQuestions />
        <AddQuestions />
        <div className={styles.btnContainer}>
          <Button width="100px">new Question</Button>
          <Button>Create</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuestion;
