/** useEffect is the second most important React hook you can use next to useState 
 * useEffect basically combines the functionality or the use cases you can cover of all these class-based lifecycle hooks in one React hook
 */
import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

/**
 * Following best practice we create as many functional components as possible
 * because we don't need here to manage state we use functional components
 */
const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    /**
     * useEffect runs after every render cycle
     * useEffect allows us when it executes by specifying second argument 
     */
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        /**
         * Inside return we put actions that happen after unmount
         */
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
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
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

/**
 * Momoization is a technique where React will momoize (store) a snapshot of this component 
 * and only if its input changes, it will re-render it. And otherwise if its inputs do not change and some parent component
 * wants to update this cockpit component, React will give back that stored component 
 */
export default React.memo(cockpit);