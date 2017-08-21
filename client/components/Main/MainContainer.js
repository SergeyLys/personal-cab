import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import { currentUserRequest } from '../../actions/currentUserRequest';
import { signOut } from '../../actions/signoutAction';
import checkLogin from '../../common/checkLogin';


class MainContainer extends React.Component {

    componentDidMount() {
        if (checkLogin('token') != '')
            this.props.currentUserRequest(checkLogin('token'));
    }

    render() {
        return (
            <Main children={this.props.children} onSignOut={this.props.signOut} currentUser={this.props.currentUser.name}/>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user
});

export default connect(mapStateToProps, {
    currentUserRequest,
    signOut
})(MainContainer);