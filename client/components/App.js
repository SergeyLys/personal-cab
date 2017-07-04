import React from 'react';
import './App.scss';
import Navigation from './Navigation';
import { routes } from '../routes';
import {Router, hashHistory} from 'react-router';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Router history={hashHistory} routes={routes} />
            </div>
        );
    }
}

