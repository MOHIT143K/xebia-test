import React from 'react';
import logo from '../../logo.svg';

// Main header used at home, search and watch list page
export const Header = (props) => {
    return (
        <div className="row header">
            <div className="col-sm-1">
                <a href="/home"><img className="p-2" src={logo} alt="logo" /></a>
            </div>
            <div className="col-sm-7">
                <h3 className="margin-top-7">
                    {
                        props.username ? 'Hello ' + props.username + ', ' : ''
                    }
                    Welcome to The Star Wars
                </h3>
            </div>
            <div className="col-sm-4 p-2">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="/" onClick={props.logout}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


