import React from 'react';
import Radium from 'radium'
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
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    /**
     * style property has higher priority than class by default css rules
     */
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      {/** 
       * Children refers to any elements (also plain text) between opening and closing tag of our component. 
       * It could be unordered list. It could be even any other React component 
       */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default Radium(person);