/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Button from "../etc/Button";

function EndQuiz({ score }) {
  return (
    <div>
      <h1>congrats</h1>
      <p>score: {score}</p>
      <Link to="/">
        <Button>Go back</Button>
      </Link>
    </div>
  );
}

export default EndQuiz;
