import React from 'react';
import { Link } from 'react-router';
import './header.scss';

export default class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className="site-header">

                <div className="header-row-top">
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="desctop-visible">
                                <p>
                                    <a href="tel:88001004440">8 800 100-44-40</a>
                                    справочная служба (бесплатно, круглосуточно)
                                    <a href="#">заказать обратный звонок</a>
                                </p>

                                <ul className="top-nav">
                                    <li><Link to="/contacts">Офисы и представительства</Link></li>
                                    <li><Link to="/news">Новости</Link></li>
                                    <li><Link to="/faq">Частые вопросы</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="header-row-bottom">
                    <div className="row">
                        <div className="small-12 columns">
                            <h1>Личный кабинет</h1>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}