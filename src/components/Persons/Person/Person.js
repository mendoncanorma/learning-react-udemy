import React, {Fragment} from 'react';
import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';

const person = ( props ) => {
    console.log('[Person.js] rendering...');

    const rnd = Math.random();

    if (rnd > 1) {
        throw new Error ('Something went wrong');
    }

    return (
        <Fragment className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </Fragment>
    )
};

export default person;