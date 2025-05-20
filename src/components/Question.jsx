import React from "react";
import Options from "./Options";

const Quiz = ({ questions, dispatch, answer, allQuestions }) => {
  console.log(allQuestions);

  return (
    <div>
      <h4>{questions.question}</h4>
      <Options questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Quiz;
