import React from 'react';
/**
 * Thanks to webpack we can actually import css files into js
 * .css extension is needed. We can only omit it in .js files
 */
import classes from './Person.css';
const person = props => {
  /*
  const rnd = Math.random();

   if (rnd > 0.7) {
     throw new Error('Something went wrong');
   }
  */

  return (
    <div className={classes.Person}>
      < p onClick={props.click} > I'm {props.name} and I am {props.age} years old!</p>
      {/** 
       * Children refers to any elements (also plain text) between opening and closing tag of our component. 
       * It could be unordered list. It could be even any other React component 
       */}
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;