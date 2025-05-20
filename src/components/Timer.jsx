import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  console.log(secondsRemaining);
  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  const min = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");
  const sec = (secondsRemaining % 60).toString().padStart(2, "0");

  return (
    <div className="timer">
      {min}:{sec}
    </div>
  );
};

export default Timer;
