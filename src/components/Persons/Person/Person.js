import React from 'react';
import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';

const person = ( props ) => {
    console.log('[Person.js] rendering...');

    const rnd = Math.random();

    if (rnd > 1) {
        throw new Error ('Something went wrong');
    }

    return (
        <WithClass classes={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    )
};

export default person;