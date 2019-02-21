import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'Conrad Dsouza', age: 40},
            {name: 'Norma Mendonca', age: 36},
            {name: 'Cheryl Dsouza', age: 10},
        ]
    }

    switchNameHandler = () => {
        this.setState({
            persons: [
                {name: 'Conrad Prem Francis Dsouza', age: 40},
                {name: 'Norma Francia Mendonca', age: 36},
                {name: 'Cheryl Nicole Dsouza', age: 10},
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
