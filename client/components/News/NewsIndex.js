import React from 'react';

export default class NewsIndex extends React.Component {

    shouldComponentUpdate(newprops) {
        return newprops.news != this.props.news;
    }

    render() {
        return (
            <div className="news-index-wrapper">
                <p>{this.props.news ? this.props.news.title : ''}</p>
                <p>{this.props.news ? this.props.news.body : ''}</p>
            </div>
        )
    }
}

