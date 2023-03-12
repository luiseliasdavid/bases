import { useReducer } from "react";

interface CounterState {
  counter: number;
  previus: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
};

type counterAction =
  | { type: "incraseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (state: CounterState,action: counterAction): CounterState => {
  
  const {counter,changes}= state

    switch (action.type) {
    case "reset":
      return {
        counter: 0,
        previus: 0,
        changes: 0,
      };
    case "incraseBy":
      return {
        previus: counter,
        counter: counter + action.payload.value,
        changes: changes + 1,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = (action: {
    type: "incraseBy" | "reset";
    payload: { value: number };
  }) => {
    dispatch(action);
  };

  return (
    <>
      <h1>Counter Reducer: </h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button
        onClick={() =>
          handleClick({ type: "incraseBy", payload: { value: 1 } })
        }
      >
        +1
      </button>
      <button
        onClick={() =>
          handleClick({ type: "incraseBy", payload: { value: 5 } })
        }
      >
        +5
      </button>
      <button
        onClick={() =>
          handleClick({ type: "incraseBy", payload: { value: 10 } })
        }
      >
        +10
      </button>
      <button
        onClick={() => handleClick({ type: "reset", payload: { value: 0 } })}
      >
        reset
      </button>
    </>
  );
};
