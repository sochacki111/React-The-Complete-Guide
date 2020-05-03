import React, { Component } from 'react';
/**
 * Thanks to webpack we can actually import css files into js
 * .css extension is needed. We can only omit it in .js files
 */
import classes from './Person.css';
class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old!</p>
        {/** 
       * Children refers to any elements (also plain text) between opening and closing tag of our component. 
       * It could be unordered list. It could be even any other React component 
       */}
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </div>
    )
  }
};

export default Person;