import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing components for routes.
import Login from '../../Login/components/Login';
import Home from '../../Home/components/Home';

// This is the main container which has all the routes.
class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                    </div>
                </div>
            </Router>
        );
    }
};

export default App;