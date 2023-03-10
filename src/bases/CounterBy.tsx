import { useState } from "react";

interface props {
  initialValue?: number
}
interface CounterState {
  counter: number,
  clicks:number
}

export const CounterBY = ({initialValue=5}:props) => {
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });
  

  const handleClick = (value:number) => {
  setCounterState(({counter,clicks}) =>( {
       counter: counter + value,
       clicks: clicks + 1
  }))
  }


  return (
    <>
      <h1> Counter: {counter} </h1>
      <h1> Counter: {clicks} </h1>
      <button onClick={()=>handleClick(1)}>+1</button>
      <button onClick={()=>handleClick(5)}>+5</button>
    </>
  );
};
