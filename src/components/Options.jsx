import React from "react";
import { useContext } from "react";
import { PuntlandContext } from "../App";

const Options = () => {
  const { questions, answer, dispatch } = useContext(PuntlandContext);
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions.options.map((opt, ind) => (
        <button
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "NewAnswer", payload: ind })}
          className={`btn btn-option ${ind === answer ? "answer" : ""} ${
            hasAnswered
              ? ind === questions.correctAnswer
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={ind}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default Options;
