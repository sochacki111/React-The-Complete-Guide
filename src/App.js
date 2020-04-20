// import React, { useState } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

/**
 * Statefull component (this component manages state) aka "smart components" or "container components"
 * You only want them of a couple
 */
class App extends Component {
  /**
   * States are managed from inside of a component
   */
  state = {
    persons: [
      { id: 'jodkjvnsdf1', name: 'Michaś', age: 22 },
      { id: 'jodkjvnsdf2', name: 'Krzyś', age: 25 },
      { id: 'jodkjvnsdf3', name: 'Zdziś', age: 28 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Create copy object of found person
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    // Create copy of persons array 
    const persons = [...this.state.persons];
    // Update person in persons array
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    /**
     * We didn't edit a constant. Arrays and objects are reference types 
     * so it doesn't assign a new value to the constant,
     * it is only holding a pointer so we actually only changed the element it was pointing to
     */
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    /**
     * Set state with an object where we only set showPersons 
     * does not mean that the entire state gets replaced with showPersons only,
     * the old state persons, another state simply is not touched
     */
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                /**
                 * Key property allows the React to keep track of the individual
                 * elements so that it has a clear property it can compare between
                 * the different elements to find out which elements changed 
                 * and which didn't
                 */
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* Convenient syntax but it can be inefficient. Use bind instead */}
        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}

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