import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Conrad Dsouza', age: 40},
            {name: 'Norma Mendonca', age: 36},
            {name: 'Cheryl Dsouza', age: 10},
        ],
        showPersons: false
    }

    nameChangedHandler = (event, index) => {
        this.setState({
            persons: [
                {name: (index===0) ? event.target.value:'Conrad Dsouza', age: 40},
                {name: (index===1) ? event.target.value:'Norma Mendonca', age: 36},
                {name: (index===2) ? event.target.value:'Cheryl Dsouza', age: 10},
            ]
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // const persons = this.state.persons.slice(); copies the array
        const persons = [...this.state.persons];
        persons.splice(persons, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler  = () => {
        const showPersons = this.state.showPersons;
        this.setState({showPersons: !showPersons});
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={index}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Switch Name</button>
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
