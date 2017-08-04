import React, { define } from 'react-mvx'
import ReactDOM from 'react-dom'

import './styles.css'

function isValidEmail(x) {
    return !x || x.indexOf('@') >= 0;
}

const Email = String.has.check(isValidEmail, 'Invalid email');

const Input = ({link, ...props}) => {
    return (
        <div className="validated-control">
            <input {...props} {...link.props}/>
            {link.error && <div className="error">{link.error}</div>}
        </div>
    )
};

@define class Application extends React.Component {

    static state = {
        name: String.isRequired,
        email: Email.isRequired,
        isActive: Boolean.value(false)
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.isValid()) {
            console.log(this.state);
        }
    };

    render(){
        const {name, email, isActive} = this.linkAll();

        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>
                        Name: <Input type="text" link={name}/>
                    </label>
                </div>

                <div>
                    <label>
                        Email: <Input type="text" link={email}/>
                    </label>
                </div>

                <div>
                    <label>
                        Name:
                        <input type="checkbox" {...isActive.props}/>
                    </label>
                </div>

                <button type="submit">submit</button>
            </form>
        );
    }
}

ReactDOM.render( <Application/>, document.getElementById( 'react-application' ) );