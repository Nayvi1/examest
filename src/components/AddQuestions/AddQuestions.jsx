import styles from './AddQuestions.module.css'

function AddQuestions() {
  return (
    <div className={styles.container}>
      <label>
        question Text:
        <input type="text" />
      </label>
      <label>
        option1 (the correct option):
        <input type="text" />
      </label>
      <label>
        option2:
        <input type="text" />
      </label>
      <label>
        option3:
        <input type="text" />
      </label>
      <label>
        option4:
        <input type="text" />
      </label>
    </div>
  );
}

export default AddQuestions;
