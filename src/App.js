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

    switchNameHandler = (event, newName) => {
        this.setState({
            persons: [
                {name: 'Conrad Dsouza', age: 40},
                {name: newName, age: 36},
                {name: 'Cheryl Dsouza', age: 10},
            ]
        });
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        changed={(event) => this.nameChangedHandler(event, 0)} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, event, 'Hey Man!')}
                        changed={(event) => this.nameChangedHandler(event, 1)}>My Hobbies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        changed={(event) => this.nameChangedHandler(event, 2)}/>
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
