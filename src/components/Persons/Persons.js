import React from 'react';
import Person from './Person/Person';
/**
 * Class based components are basicly used for state management
 * and functional components for the presentation of content
 */
const persons = (props) =>
    props.persons.map((person, index) =>
        <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            /**
             * Key property allows the React to keep track of the individual
             * elements so that it has a clear property it can compare between
             * the different elements to find out which elements changed 
             * and which didn't
             */
            key={person.id}
            changed={(event) => props.changed(event, person.id)} />
    );

export default persons;