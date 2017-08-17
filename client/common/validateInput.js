import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.login)) {
        errors.login = 'Это поле необходимо заполнить'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Это поле необходимо заполнить'
    }

    // if (Validator.isEmpty(data.location)) {
    //     errors.location = 'Это поле необходимо заполнить'
    // }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}