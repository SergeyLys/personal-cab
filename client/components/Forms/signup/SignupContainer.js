import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest } from '../../../actions/signupActions';

class SignupContainer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="small-12 columns">
                    <SignupForm userSignupRequest={this.props.userSignupRequest} />
                </div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest })(SignupContainer);