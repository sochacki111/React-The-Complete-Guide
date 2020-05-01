// import React, { useState } from 'react';
import React, { Component } from 'react';
/**
 * By adding configurations items, we can now import 
 * from App.css to classes.
 * It will import classes as properties on classes object
 */
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

/**
 * Statefull component (this component manages state) aka "smart components" or "container components"
 * You only want them of a couple
 */
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
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

/**
 * Presentational component is a functional component that does not manages state
 * It is a good practice to restrict yourself to a couple of components that are involved in the state management 
 * The majority of components should be presentational, stateless components
 */

 /**
  * Component Lifecycle - Creation
  * 1. constructor(props)
  *   - setting initial state
  *   - DON'T sending a HTTP request or storing sth in your local storage
  * 2. getDerivedStateStateFromProps(props, state)
  *   - sync state 
  *   - very niche lifecycle
  *   - DON'T sending a HTTP request or storing sth in your local storage
  * 3. render()
  *   - prepare & structure JSX Code
  * 4. Render Child Components 
  *   - componentDidMount()
  *   - DO cause side-effects like sending a HTTP request or storing sth in your local storage
  *   - DON'T update state
  */