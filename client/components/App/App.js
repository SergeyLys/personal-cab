import React from 'react';
import './App.scss';
import { routes } from '../../routes';
import {Router, hashHistory} from 'react-router';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={hashHistory} routes={routes} />
        );
    }
}

