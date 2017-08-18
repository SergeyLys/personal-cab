import React from 'react'
import { connect } from 'react-redux';
import News from './News';
import { newsListRequest } from '../../actions/newsRequest';
import checkLogin from '../../common/checkLogin';


class NewsContainer extends React.Component {
    componentWillMount() {
        // this.props.newsListRequest(checkLogin('token'));
        // console.log(this.props);
    }

    componentDidMount() {
        this.props.newsListRequest(checkLogin('token'));
    }

    render() {
        console.log('news container ',this.props);
        const {newsArray} = this.props;
        return (
            <div>
                {newsArray && <News news={newsArray}/>}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    newsArray: state.news
});

export default connect(mapStateToProps, {newsListRequest})(NewsContainer);