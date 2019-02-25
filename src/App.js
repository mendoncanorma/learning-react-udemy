import React, {Component} from 'react';
import './App.css';

import Validation from './Components/Validation';
import Characters from './Components/Characters';

class App extends Component {

    state = {
        username: ''
    }

    nameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    deleteCharacter = (event, position) => {
        var arr_username = this.state.username.split('');
        arr_username.splice( position, 1 );

        this.setState({
            username: arr_username.join('')
        });
    }

    render() {
        let arr_characters = this.state.username.split('') || [],
            characters;

        characters = arr_characters.map((character, index) => {
            return (<Characters key={index+character} character={character} click={() => this.deleteCharacter(event, index)} />);
        });


        return (
            <div>
                <input type="text" onChange={this.nameChangeHandler} value={this.state.username} />
                <p>Username length: {this.state.username.length}</p>
                <Validation usernamelength={this.state.username.length} />
                {characters}
            </div>
        );
    }
}

export default App;
