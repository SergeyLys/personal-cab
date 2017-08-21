import React from 'react';
import { connect } from 'react-redux';
import SigninForm from './SigninForm';
import { userSigninRequest } from '../../../actions/signinActions';
import { currentUserRequest } from '../../../actions/currentUserRequest';
import checkLogin from '../../../common/checkLogin';

class SignupContainer extends React.Component {
    componentWillUnmount() {
        if (checkLogin('token') != '')
            this.props.currentUserRequest(checkLogin('token'));
    }
    render() {
        return (
            <div className="row">
                <div className="small-12 columns">
                    <SigninForm userSigninRequest={this.props.userSigninRequest} />
                </div>
            </div>
        )
    }
}

export default connect(null, {
    currentUserRequest,
    userSigninRequest
})(SignupContainer);