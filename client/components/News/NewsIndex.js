import React from 'react';
import { connect } from 'react-redux';
import { newsItemRequest } from '../../actions/newsRequest';
import checkLogin from '../../common/checkLogin';

class NewsIndex extends React.Component {
    componentDidMount() {
        this.props.newsItemRequest(checkLogin('token'), this.props.location.pathname.split('/').pop());
    }

    render() {
        // const {title, body} = this.props.news.news;
        console.log('news index ',this.props);

        return (
            <div className="news-index-wrapper">
                {/*<p>{title}</p>*/}
                {/*<p>{body}</p>*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newsItem: state.news[0]
});

export default connect(mapStateToProps, {newsItemRequest})(NewsIndex);