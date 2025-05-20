import React from "react";

const Progress = ({ numQuestions, index, totalPoints, points, answer }) => {
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
