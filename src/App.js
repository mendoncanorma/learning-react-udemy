import React, {Component} from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
    state = {
        username: 'testing'
    };

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {

        return (
            <div className="App">
                <UserInput  username={this.state.username} changed={this.usernameHandler} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
