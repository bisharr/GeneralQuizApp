import React, { useContext, useEffect } from "react";
import { PuntlandContext } from "../App";

const Timer = () => {
  const { dispatch, minutes } = useContext(PuntlandContext);

  useEffect(() => {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);
  const min = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const sec = (minutes % 60).toString().padStart(2, "0");

  return (
    <div className="timer">
      {min}:{sec}
    </div>
  );
};

export default Timer;
