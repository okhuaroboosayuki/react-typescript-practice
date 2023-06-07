import { useReducer } from "react";

type CounterState = {
  count: number;
};
// discriminated unions in typescript is a case where you have a type that has a common property that is a literal type
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
