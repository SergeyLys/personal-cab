import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <footer className="site-footer">
                <div className="footer-bottom-row">
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="footer-bottom-content">
                                <p>&#169; 2016, ВТБ Медицинское страхование. <a href="#" className="desctop-visible">Правовая информация</a></p>
                                <p><a href="#">Группа ВТБ</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}