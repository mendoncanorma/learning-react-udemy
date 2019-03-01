import React from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

const persons = (props) => {
    console.log('[Persons.js] rendering...');

    let persons = props.persons.map((person, index) => {
        return <ErrorBoundary key={index}>
            <Person
                name={person.name}
                age={person.age}
                click={() => props.clicked(index)}
                changed={(event) => props.changed(event, index)} />
        </ErrorBoundary>
    });

    return persons;
};

export default persons;