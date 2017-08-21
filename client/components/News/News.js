/*Новости*/

import React from 'react';
import { Link } from 'react-router';
import './news.scss';

export default class News extends React.Component {

    render() {
        const newsList = !this.props.news.news.news ? null : this.props.news.news.news.map((item, index)=> {
            return (
                <div className="news-item" key={index}>
                    <p className="news-date">{item.createdAt}</p>
                    <h4 className="news-title"><Link to={`/news/${item.url}`}>{item.title}</Link></h4>
                    <p className="news-content">{item.body}</p>
                </div>
            )
        });
        return (
            <div className="container">
                <h3>Новости</h3>
                <div className="news-list">
                    {newsList}
                </div>
            </div>
        );
    }
}