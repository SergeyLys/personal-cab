import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li><Link to='/services'>Оказанные услуги</Link></li>
                <li><Link to='/dispans'>Диспансеризация</Link></li>
                <li><Link to='/hospital'>Госпитализация</Link></li>
                <li><Link to='/issues'>Обращения</Link></li>
            </ul>
        );
    }
}

