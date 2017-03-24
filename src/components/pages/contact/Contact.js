import React, { Component } from 'react';

import {patterns} from '../../../patterns/patterns';

import FormField from './FormField';

import './Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    onChangeInput = (type, value) => {
        this.props.changeInput(this.buildPayload(type, value, this.props.userData));
    };

    validateInput = (type, pattern) => {
        //console.log(pattern);
        //console.log(this.props.userData[type]);

        if (!this.props.userData[type].length) {
            console.log('field - ' + type + ': is empty');

            this.props.validateInput(this.buildPayload(type + 'IsValid', false, this.props.errors));
        } else if (!pattern.test(this.props.userData[type])) {
            console.log('field - ' + type + ': is NOT valid');

            this.props.validateInput(this.buildPayload(type + 'IsValid', false, this.props.errors));
        } else {
            console.log('All right!');

            this.props.validateInput(this.buildPayload(type + 'IsValid', true, this.props.errors));
        }

    };

    buildPayload = (type, value, state) => {
        let tmpPayload = {},
            payload = {};

        tmpPayload[type] = value;
        payload = {...state, ...tmpPayload};

        return payload;
    };

    render() {

        return(
            <div className="b-contact">
                <div className="g-banner m-banner_contact">
                    <div className="g-banner__container g-container">
                        <h1 className="g-banner__title">Contact</h1>
                    </div>
                </div>
                <div className="b-form-wrap">
                    <form action="#" className="b-form">
                        <FormField
                            label="First name"
                            inputType="text"
                            fieldName="firstName"
                            inputValue={this.props.userData.firstName}
                            inputIsValid={this.props.errors.firstNameIsValid}
                            onChangeInput={this.onChangeInput.bind(this, 'firstName')}
                            onFocusOutInput={this.validateInput.bind(this, 'firstName', patterns.name)}
                        />
                        <FormField
                            label="Last name"
                            inputType="text"
                            fieldName="lastName"
                            inputValue={this.props.userData.lastName}
                            inputIsValid={this.props.errors.lastNameIsValid}
                            onChangeInput={this.onChangeInput.bind(this, 'lastName')}
                            onFocusOutInput={this.validateInput.bind(this, 'lastName', patterns.name)}
                        />
                        <FormField
                            label="Email"
                            inputType="text"
                            fieldName="email"
                            inputValue={this.props.userData.email}
                            inputIsValid={this.props.errors.emailIsValid}
                            onChangeInput={this.onChangeInput.bind(this, 'email')}
                            onFocusOutInput={this.validateInput.bind(this, 'email', patterns.email)}
                        />

                        <div className="b-form__controls">
                            <button
                                className="b-form__btn"
                            >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;
