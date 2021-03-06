import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { currentUserRequest } from '../../actions/currentUserRequest';

class HeaderContainer extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <Header/>
            </div>
        )
    }
}

export default connect(null, {currentUserRequest})(HeaderContainer);