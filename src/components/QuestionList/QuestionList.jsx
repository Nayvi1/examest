import Question from "./Question";

import styles from "./QuestionList.module.css";

const x = [
  {
    name: "test1",
  },
  {
    name: "test2",
  },
  {
    name: "test3",
  },
  {
    name: "test4",
  },
  {
    name: "test5",
  },
  {
    name: "test6",
  },
];

function QuestionList() {
  return (
    <div className={styles["question-list"]}>
      {x.map((question) => (
        <Question question={question} key={question.name} />
      ))}
    </div>
  );
}

export default QuestionList;
