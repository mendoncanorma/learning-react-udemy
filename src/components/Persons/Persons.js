import React, {Component} from 'react';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends Component {
    state = {}

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] | getDerivedStateFromProps', props, state);
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] | shouldComponentUpdate', nextProps, nextState);
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] | getSnapshotBeforeUpdate', prevProps, prevState);
        return {message: 'Persons.js snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] | componentDidUpdate', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] | componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        let persons = this.props.persons.map((person, index) => {
            return <ErrorBoundary key={index}>
                <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, index)}/>
            </ErrorBoundary>
        });

        return persons;
    }
}

export default Persons;