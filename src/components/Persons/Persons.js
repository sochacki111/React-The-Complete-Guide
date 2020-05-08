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
        /**
         * shouldComponentUpdate is super important can help save performace by stopping some rendering actions.
         * But this doesn't mean that you should place it in every component because if you're pretty sure that in all or almost all cases where your parent
         * update, you will need to update too , then you should not add shouldComponentUpdate or React memo because you will just execute some extra logic 
         * that makes no sense and actually just slows down the application tiny bit
         */
        console.log('[Persons.js] shoudComponentUpdate')
        /**
         * Here return true if react should continue updating or false if it shouldn't 
         */
        /**
         * Persons is an array, and arrays just like objects in js are reference types.
         * In short, the idea is that reference types, so arrays and objects, are stored in memory
         * and what we actually story in variables and properties here are only pointers at that place in memory 
         * so what we do compare here is actually the pointer
         * If sth in that person component changed and the pointer is still the same, then this update wouldn't run
         */
        /**
         * IMPORTANT!
         * Even if some propery of persons changed but the place in moemory would be the same,
         * then this check would not work because it douesn't deeply compare this, it doesn't look at all the properties
         * in persons or in all the objects in persons, it just does a shallow comparison, which it compares whether these two values here
         * really are the same and the values are our pointers here and it works correctly because in App.js we actually updated persons correctly
         * by replacing the obejects.
         * 
         */
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
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

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
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