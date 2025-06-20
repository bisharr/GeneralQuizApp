import React, { useContext } from "react";
import { PuntlandContext } from "../App";

const FinishScreen = () => {
  const { displayName } = useContext(PuntlandContext);
  const { points, totalPoints, dispatch } = useContext(PuntlandContext);

  const percentage = (points / totalPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🥳";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 1 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🙅‍♂️";

  return (
    <>
      <p className="result">
        {emoji}
        <span className=" font-bold text-2xl">{displayName}</span> Scored{" "}
        <strong>{points}</strong> out of {totalPoints} ({Math.ceil(percentage)}
        %)
      </p>
      {/* <p className="highscore">HighScore: {highScore}</p> */}
      <button
        onClick={() => dispatch({ type: "startagain" })}
        className="btn btn-ui"
      >
        Start Again
      </button>
    </>
  );
};

export default FinishScreen;
