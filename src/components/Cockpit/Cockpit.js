/** useEffect is the second most important React hook you can use next to useState 
 * useEffect basically combines the functionality or the use cases you can cover of all these class-based lifecycle hooks in one React hook
 */
import React, { useEffect } from 'react';
import classes from './Cockpit.css';
/**
 * Following best practice we create as many functional components as possible
 * because we don't need here to manage state we use functional components
 */
const cockpit = (props) => {
    /**
     * useEffect allows us when it executes by specifying second argument 
     */
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);
    
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;