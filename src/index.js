import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './Pages/App/App';

ReactDOM.render(
    <Router>
        <Route render={(props) => 
            <App {...props} />
            }
        />
    </Router>,
    document.getElementById('root')
);