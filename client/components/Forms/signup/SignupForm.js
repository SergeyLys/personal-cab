import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import validateInput from '../../../common/validateInput';

export default class SignupForm extends React.Component {
    constructor() {
        super()
    }

    state = {
        username: '',
        password: '',
        location: '',
        terms: false,
        errors: {}
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {} });
            this.props.userSignupRequest(this.state).then(
                () => {

                },
                ({data}) => this.setState({ errors: data })
            )
        }

    }

    onChange(e) {
        if (e.target.name === 'terms') {
            // e.target.c
            console.log(e.target);
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    render() {
        const errors = this.state.errors;

        return (
            <div className="row align-center">
                <div className="small-12 medium-6 column">
                    <h1>Регистрация личного кабинета</h1>
                    <p>Если вы уже зарегистрированы, <Link to='/signin'>войдите</Link> в личный кабинет или воспользуйтесь процедурой
                        <Link to='/access-recovery'>восстановления доступа</Link>, если не помните свой пароль. Повторная регистрация одного и того же лица не допускается. Поля, обозначенные звездочками, обязательны для заполнения.</p>

                    <form action="#" onSubmit={::this.onSubmit}>
                        <div className={classnames("input-row", {'has-error': errors.username})}>
                            <label>Мобильный телефон или электронная почта <span>*</span>:</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={::this.onChange}
                            />
                            {errors.username ? <span className="error">{errors.username}</span> : ''}
                        </div>
                        <div className={classnames("input-row", {'has-error': errors.password})}>
                            <label htmlFor="">Номер полиса ОМС или временного свидетельства <span>*</span>:</label>
                            <input
                                type="text"
                                name="password"
                                value={this.state.password}
                                onChange={::this.onChange}
                            />
                            {errors.password ? <span className="error">{errors.password}</span> : ''}
                        </div>
                        <div className={classnames("input-row", {'has-error': errors.location})}>
                            <label htmlFor="">Регион <span>*</span>:</label>
                            <select
                                name="location"
                                value={this.state.location}
                                onChange={::this.onChange}
                            >
                                <option value="" disabled></option>
                                <option value="1">Тест</option>
                            </select>
                            {errors.location ? <span className="error">{errors.location}</span> : ''}
                        </div>
                        <button className="button">Зарегистрироваться</button>
                    </form>

                    <div className="bottom-actions">
                        <Link to='/signin'>Вход в систему</Link>
                        <Link to='/access-recovery'>Восстановление доступа</Link>
                    </div>
                </div>
            </div>
        )
    }
}