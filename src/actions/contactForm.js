export function changeInput(userData) {
    return {
        type: 'CHANGE_INPUT',
        userData
    }
}

export  function validateInput(errors) {
    return {
        type: 'VALIDATE_INPUT',
        errors
    }
}

export  function submitForm(status) {
    return {
        type: 'SUBMIT_FORM',
        status
    }
}