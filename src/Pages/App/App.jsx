import React, {Component} from 'react';
import './App.css';
import Landing from '../Landing/Landing';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
        <div>
            <Landing />
        </div>
        )
    }
}

export default App;