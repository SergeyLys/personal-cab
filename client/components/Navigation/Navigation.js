import React from 'react';
import { Link } from 'react-router';
import './Navigation.scss';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="site-navigation">
                <ul>
                    <li><Link activeClassName='active' to='/services'>Оказанные услуги</Link></li>
                    <li><Link activeClassName='active' to='/dispans'>Диспансеризация</Link></li>
                    <li><Link activeClassName='active' to='/hospital'>Госпитализация</Link></li>
                    <li><Link activeClassName='active' to='/issues'>Обращения</Link></li>
                    <li><Link activeClassName='active' to='/organisations'>Медицинские организации</Link></li>
                    <li><Link activeClassName='active' to='/elcard'>Электронная медкарта</Link></li>
                    <li><Link activeClassName='active' to='/addons'>Дополнительные услуги</Link></li>
                    <li className="has-entry-icon"><Link activeClassName='active' to='/polis'>ВТБ Страхование</Link></li>
                    <li className="has-entry-icon"><Link activeClassName='active' to='/lifepolis'>ВТБ Страхование жизни</Link></li>
                </ul>
            </nav>
        );
    }
}

