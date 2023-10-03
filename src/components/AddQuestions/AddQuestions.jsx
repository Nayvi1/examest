import Button from "../etc/Button";
import styles from "./AddQuestions.module.css";
/* eslint-disable react/prop-types */

function AddQuestions({ question, onChange, index, onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.firstRow}>
        <label>
          question Text:
          <input
            required
            name="question"
            value={question.question}
            type="text"
            onChange={(e) => onChange(e, index)}
          />
        </label>
        <Button handleClick={(e) => onClick(e, question.id)}>Delete</Button>
      </div>
      <label>
        option1 (the correct option):
        <input
          required
          type="text"
          value={question.options[0].option}
          name="0"
          onChange={(e) => onChange(e, index)}
        />
      </label>
      <label>
        option2:
        <input
          required
          type="text"
          value={question.options[1].option}
          name="1"
          onChange={(e) => onChange(e, index)}
        />
      </label>
      <label>
        option3:
        <input
          required
          type="text"
          value={question.options[2].option}
          name="2"
          onChange={(e) => onChange(e, index)}
        />
      </label>
      <label>
        option4:
        <input
          required
          value={question.options[3].option}
          type="text"
          name="3"
          onChange={(e) => onChange(e, index)}
        />
      </label>
    </div>
  );
}

export default AddQuestions;
