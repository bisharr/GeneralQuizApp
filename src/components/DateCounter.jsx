import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      return state;
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  const initialState = {
    count: 0,
    step: 1,
  };
  const [count, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count.count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  // const defineCount = function (e) {
  //   // setCount(Number(e.target.value));
  //   dispatch({ type: "setCount", payload: Number(e.target.value) });
  // };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset", payload: 0 });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={count.step}
          onChange={defineStep}
        />
        <span>{count.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input
          value={count.count}
          onChange={(e) =>
            dispatch({ type: "setCount", payload: Number(e.target.value) })
          }
        />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
