import React from 'react';
/**
 * Thanks to webpack we can actually import css files into js
 * .css extension is needed. We can only omit it in .js files
 */
import './Person.css'
/**
 * Stateless component - it has no internal state management
 * It is a good practice to create as many of these stateless components aka "dumms" (they don't have any internal logic) or "presentional components"
 * They only get external data and output it in structured way 
 * props is an object that holds every property passed to the Person class
 */
const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/* Children refers to any elements (also plain text) between opening and closing tag of out component. It could be unordered list. It could be even any other React component */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;