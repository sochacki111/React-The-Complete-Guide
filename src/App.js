import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/**
 * Statefull component (this component manages state) aka "smart components" or "container components"
 * You only want them of a couple
 */
class App extends Component {
  // States are managed from inside of a component
  state = {
    persons: [
      { name: 'Michaś', age: 22 },
      { name: 'Krzyś', age: 25 },
      { name: 'Zdziś', age: 28 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Michał';
    // Special method
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Krzysztof', age: 25 },
        { name: 'Zdziś', age: 28 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Michaś111', age: 22 },
        { name: event.target.value, age: 25 },
        { name: 'Zdziś', age: 28 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Convenient syntax but it can be inefficient. Use bind instead */}
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Michaś111')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Michaś!')}> My Hobbies: Programming</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Michaś!')}> My Hobbies: Programming</Person>
      </div>
    );
  };

}
export default App;

/**
 * React 16.8 added Hooks. This allows us to manage state in functionl components with e.g. useState hook
 * Diff between React Hooks (Functional Components) and Class Components:
 * your function here which you get as the second element in that array does not merge whatever you pass
 * to it with the old state,
 * instead it replaces the old state with it
 */
// const app = props => {
//   // First returned argument allows us to access persons data
//   // Second returned argument allows us to set a new state
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Michaś', age: 22 },
//       { name: 'Krzyś', age: 25 },
//       { name: 'Zdziś', age: 28 }
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other state');

//   console.log(personsState, otherState);

//   const switchNameHandler = (newName) => {
//     // console.log('Was clicked!');
//     // DON'T DO THIS: this.state.persons[0].name = 'Michał';
//     // Special method
//     setPersonsState( { 
//       persons: [
//         { name: newName, age: 22 },
//         { name: 'Krzysztof', age: 25 },
//         { name: 'Zdziś', age: 28 }
//       ] 
//     });
//   };