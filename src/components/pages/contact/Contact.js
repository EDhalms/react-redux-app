import React, { Component } from 'react';

import FormField from './FormField';

import './Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);
    }

    onChangeInput = (type, text) => {
        let tmpPayload = {},
            payload = {};

        tmpPayload[type] = text;
        payload = {...this.props.userData, ...tmpPayload};

        this.props.changeInput(payload);
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
                            onChangeInput={this.onChangeInput.bind(this, 'firstName')}
                        />
                        <FormField
                            label="Last name"
                            inputType="text"
                            onChangeInput={this.onChangeInput.bind(this, 'lastName')}
                        />
                        <FormField
                            label="Email"
                            inputType="text"
                            onChangeInput={this.onChangeInput.bind(this, 'email')}
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
