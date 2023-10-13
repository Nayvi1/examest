/* eslint-disable react/prop-types */

import ShowOptions from "../ShowOptions/ShowOptions";

function QuizShow({ qz, index }) {
  if (!qz) return;
  const { questions } = qz;

  return (
    <div>
      <ShowOptions index={index} questions={questions} />
    </div>
  );
}

export default QuizShow;
