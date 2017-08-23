/*Дополнительные услуги*/

import React from 'react';
import { connect } from 'react-redux';
import { addonsListRequest } from '../../actions/addonsRequest';
import checkLogin from '../../common/checkLogin';
import Addons from './Addons';

class AddonsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.addonsListRequest(checkLogin('token'));
    }

    render() {
        return (
            <div className="container">
                <h2>Дополнительные услуги</h2>
                <Addons addons={this.props.addons} />
            </div>
        );
    }
}



const mapStateToProps = state => ({
    addons: state.addons
});

export default connect(mapStateToProps, {addonsListRequest})(AddonsContainer);