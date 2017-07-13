import React from 'react';

export default class SigninForm extends React.Component {
    constructor() {
        super()
    }

    onChange(e) {

    }

    render() {
        return (
            <form action="">
                <div className="input-group">
                    <label>Мобильный телефон или электронная почта*:</label>
                    <input
                        type="text"
                        name="login"
                        onChange={::this.onChange}
                    />
                </div>

                <div className="input-group">
                    <label>Логин</label>
                    <input
                        type="text"
                        name="login"
                        onChange={::this.onChange}
                    />
                </div>

                <div className="input-group">
                    <label>Логин</label>
                    <input
                        type="text"
                        name="login"
                        onChange={::this.onChange}
                    />
                </div>
            </form>
        )
    }
}