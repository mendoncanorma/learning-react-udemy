import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    const assignedClasses = [];
    let btnClass = '';

    if (props.persons.length <= 2) {
        assignedClasses.push('red');
    }

    if (props.persons.length <= 1) {
        assignedClasses.push('bold');
    }

    if (props.showPersons) {
        btnClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name
            </button>
        </div>
    )
};

export default cockpit;