import React from 'react';
import { connect } from 'react-redux';
import { newsItemRequest } from '../../actions/newsRequest';
import checkLogin from '../../common/checkLogin';
import NewsIndex from './NewsIndex';

class NewsIndexContainer extends React.Component {
    componentDidMount() {
        this.props.newsItemRequest(checkLogin('token'), this.props.location.pathname.split('/').pop());
    }

    render() {
        console.log(this);
        return (
            <NewsIndex news={this.props.newsItem}/>
        )
    }
}

const mapStateToProps = state => ({
    newsItem: state.news[0]
});

export default connect(mapStateToProps, {newsItemRequest})(NewsIndexContainer);