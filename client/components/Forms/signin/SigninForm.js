import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import validateInput from '../../../common/validateInput';
import { browserHistory } from 'react-router';


export default class SigninForm extends React.Component {
    constructor() {
        super()
    }

    state = {
        login: '',
        password: '',
        errors: {}
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({errors: {}});
            this.props.userSigninRequest(this.state)
                .then((response) => {
                    document.cookie = `token=${response.data}`;
                    browserHistory['replace']('/');
                })
                .catch(error => {
                    switch (error.response.status) {
                        case 400: {
                            this.setState({errors: {}});
                            this.setState({errors: {password: error.response.data.message}});
                            break;
                        }
                        case 401: {
                            this.setState({errors: {}});
                            this.setState({errors: {login: error.response.data.message}});
                            break;
                        }
                        default: this.setState({errors: {}});
                    }
                });
        }

    }

    render() {
        const errors = this.state.errors;

        return (
            <div className="row align-center">
                <div className="small-12 medium-8 column">
                    <h1>Вход в личный кабинет</h1>
                    <form onSubmit={::this.onSubmit}>

                        <div className={classnames("input-row", {'has-error': errors.login})}>
                            <label>Логин</label>
                            <input
                                type="text"
                                name="login"
                                value={this.state.login}
                                onChange={::this.onChange}
                            />
                            {errors.login ? <span className="error">{errors.login}</span> : ''}
                        </div>

                        <div className={classnames("input-row", {'has-error': errors.password})}>
                            <label>Пароль</label>
                            <input
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={::this.onChange}
                            />
                            {errors.password ? <span className="error">{errors.password}</span> : ''}
                        </div>

                        <div className="input-row">
                            <button className="button">Войти</button>
                        </div>
                    </form>

                    <div className="bottom-actions">
                        <Link to='/signup'>Зарегистрироваться</Link>
                        <Link to='/access-recovery'>Восстановление доступа</Link>
                    </div>
                </div>
            </div>
        )
    }
}