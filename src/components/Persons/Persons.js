import React, { Component } from 'react';
import Person from './Person/Person';
/**
 * Class based components are basicly used for state management
 * and functional components for the presentation of content
 */
class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }
   
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shoudComponentUpdate')
        /**
         * Here return true if react should continue updating or false if it shouldn't 
         */
        return true;
    }    

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) =>
            <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                /**
                 * Key property allows the React to keep track of the individual
                 * elements so that it has a clear property it can compare between
                 * the different elements to find out which elements changed 
                 * and which didn't
                 */
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        );
    }
}

export default Persons;