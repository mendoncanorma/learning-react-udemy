import React, {Component} from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] | constructor');
        this.state = {
            persons: [
                {name: 'Conrad Dsouza', age: 40},
                {name: 'Norma Mendonca', age: 36},
                {name: 'Cheryl Dsouza', age: 10},
            ],
            showPersons: false,
            showCockpit: true
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] | getDerivedStateFromProps', props, state);
        return state;
    }

    nameChangedHandler = (event, index) => {
        var person = {...this.state.persons[index]}; // Object.assign({}, this.state.persons[index]);
        person.name = event.target.value;

        var persons = [...this.state.persons];
        persons[index] = person;

        this.setState({
            persons: persons
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // const persons = this.state.persons.slice(); copies the array
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const showPersons = this.state.showPersons;
        this.setState({showPersons: !showPersons});
    }

    render() {
        console.log('[App.js] | render');

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons persons={this.state.persons}
                               clicked={this.deletePersonHandler}
                               changed={this.nameChangedHandler}/>;
        }

        return (
            <div className={classes.App}>
                <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
                {this.state.showCockpit ?
                    <Cockpit
                        clicked={this.togglePersonsHandler}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}/>
                    : null}
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }

    componentDidMount() {
        console.log('[App.js] | componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] | shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] | getSnapshotBeforeUpdate', prevProps, prevState);
        return {message: 'App.js snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] | componentDidUpdate', prevProps, prevState, snapshot);
    }
}

export default App;
