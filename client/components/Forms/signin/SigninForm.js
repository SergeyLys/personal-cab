import React from 'react';
import {Link} from 'react-router';

export default class SigninForm extends React.Component {
    constructor() {
        super()
    }

    state = {
        username: '',
        password: ''
    };

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.userSigninRequest(this.state);

    }

    render() {
        return (
            <div className="row align-center">
                <div className="small-12 medium-8 column">
                    <h1>Вход в личный кабинет</h1>
                    <form onSubmit={::this.onSubmit}>
                        <div className="input-row">
                            <label>Логин</label>
                            <input
                                type="text"
                                name="username"
                                onChange={::this.onChange}
                            />
                        </div>

                        <div className="input-row">
                            <label>Пароль</label>
                            <input
                                type="text"
                                name="password"
                                onChange={::this.onChange}
                            />
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