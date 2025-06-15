import React, { useContext } from "react";
import Options from "./Options";
import { PuntlandContext } from "../App";

const Quiz = () => {
  const { questions } = useContext(PuntlandContext);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options />
    </div>
  );
};

export default Quiz;
