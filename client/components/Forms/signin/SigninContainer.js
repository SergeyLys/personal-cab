import React from 'react';
import { connect } from 'react-redux';
import SigninForm from './SigninForm';
import { userSigninRequest } from '../../../actions/signinActions';

class SignupContainer extends React.Component {
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

export default connect(null, { userSigninRequest })(SigninForm);