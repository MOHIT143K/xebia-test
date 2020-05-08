import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Importing components for routes.
import Home from '../../Home/components/Home';
import Resturant from '../../Home/components/Resturant';

// This is the main container which has all the routes.
class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resturant" component={Resturant} />
                </div>
            </Router>
        );
    }
};

export default App;