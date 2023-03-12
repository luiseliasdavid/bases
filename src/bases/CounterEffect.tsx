import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';


const MAXIMUN_Count = 10;

export const CounterEffect = () => {

    
    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        
        setCounter( prev => Math.min(prev+1 , MAXIMUN_Count)  );
    }

    useEffect(() => {

        if(counter <10) return;

      console.log('%cse llego al valor maximo','color:red; background-color: white;','hola')
      //el time line hara que se ejecuten en orden las promesas
      const timeLine= gsap.timeline();

      timeLine.to(counterElement.current,{y: -10, duration:0.2, ease:'bounce.out'})
              .to(counterElement.current,{y:0,duration:1, ease:'ease.out'})
      

    }, [counter])
    

    return (
        <>
       
            <h1>CounterEffect: </h1>   
            <h2 ref={counterElement}>{ counter }</h2>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}