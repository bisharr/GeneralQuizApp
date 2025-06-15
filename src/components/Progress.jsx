import React, { useContext } from "react";
import { PuntlandContext } from "../App";

const Progress = () => {
  const { numQuestions, index, totalPoints, points, answer } =
    useContext(PuntlandContext);
  console.log(points);
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{totalPoints} Total Points
      </p>
    </header>
  );
};

export default Progress;
