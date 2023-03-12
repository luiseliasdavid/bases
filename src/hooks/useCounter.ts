import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';


export const useCounter = ({maxCount=1}) => {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);
    
    const handleClick = () => {
        
        setCounter( prev => Math.min(prev+1 , maxCount)  );
    }
    //se crea una referencia, 
    //luego puede usarse dentro de useEffect si pasar la variable como argumento
    //el time line hara que se ejecuten en orden las promesas
    const timeLine= useRef(gsap.timeline())
    
    useLayoutEffect(() => {
        
      /*   if(counter <10) return;
        
        console.log('%cse llego al valor maximo','color:red; background-color: white;','hola') */
        
        timeLine.current.to(counterElement.current,{y: -10, duration:0.2, ease:'bounce.out'})
        .to(counterElement.current,{y:0,duration:1, ease:'ease.out'})
        .pause()
        
    }, [counter])
    
    useEffect(() => {
     
      timeLine.current.play(0)
    }, [counter])
    



  return {

    counter,
    counterElement,
    handleClick
  }

}