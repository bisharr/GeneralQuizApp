import React from "react";

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to Puntland State Quiz</h2>
      <h3>
        You have {numQuestions} basic questions and 5 minutes to test Your
        Puntland Knowledge
      </h3>
      <button
        onClick={() => {
          dispatch({ type: "start" });
        }}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
