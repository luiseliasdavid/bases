
import { Counter } from "./bases/Counter";
import { CounterBY } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";



function App() {
 

  return (
    <>
      <Counter/>
      <CounterBY initialValue={15} />
      <CounterEffect/>
      
    </>
  );
}

export default App;
