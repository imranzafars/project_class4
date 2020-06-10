import React, { useState } from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] =useState(false)
// count is variable name
// setCount will be used to change value of variable count
// useState(0) will put default value of 0 in count

  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}> 
      <h1>GOOD {isMorning ? 'MORNING' : 'NIGHT'} </h1>
      <h2>Have {isMorning ? 'a Good Day' : 'some Nice Sleep'} </h2>
      <Message counter={count}/>
      <br />
      <button onClick={
      //  ()=>alert('Button Pressed')
        ()=> setCount(++count)
        }>
        Increase Counter</button>
      
      <button onClick={
      
        ()=> setCount(--count)
        }>
        Decrease Counter</button>

      <button onClick={
      
        ()=> setMorning(!isMorning)
        }>
        Change Day / Night</button>
    </div>
  );
}

export default App;
// ()=> alert ('Button Pressed') is an anonymous function used.
// called anonymous becoz no name is given to this function.
// In Message, counter is the prop in which we are passing count variable used in let function.
// useState can take any variable type like string, boolean etc.
// useState transfer value on items under it. It cannot change value in lines above it.
