/* eslint-disable react/prop-types */

import Button from "../etc/Button";

function StartQuiz({ qz, dispatch }) {
  const { questions, name } = qz;

  function handleClick() {
    dispatch({ type: "start" });
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>{questions.length} questions loaded</p>
      <Button handleClick={handleClick}>Start</Button>
    </div>
  );
}

export default StartQuiz;
