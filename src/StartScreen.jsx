import React from "react";
import { useContext } from "react";
import { PuntlandContext } from "./App";

function StartScreen() {
  const { numQuestions, dispatch, minutes, displayName, handleDeleteAccount } =
    useContext(PuntlandContext);
  return (
    <div className="start">
      <h2>Welcome! {displayName}</h2>
      <h3>
        You have {numQuestions} basic questions and {minutes / 60} minutes to
        test Your General Knowledge
      </h3>
      <button
        onClick={() => {
          dispatch({ type: "start" });
        }}
        className="btn btn-ui"
      >
        Let's Start!
      </button>
    </div>
  );
}

export default StartScreen;
