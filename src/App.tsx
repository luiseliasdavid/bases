
import { CounterReducerComponent } from "./bases/ConterReducer";
import { Counter } from "./bases/Counter";
import { CounterBY } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from './bases/counterHook';



function App() {
 

  return (
    <>
      <Counter/>
      <CounterBY initialValue={15} />
      <CounterEffect/>
      <CounterHook/>
      <CounterReducerComponent/>
      
    </>
  );
}

export default App;
