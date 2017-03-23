import React, { Component } from 'react';

import './Contact.css';

class FormField extends Component {

    constructor(props) {
        super(props);
    }

    handleChangeInput = (e) => {
        if(typeof this.props.onChangeInput === 'function') {
            this.props.onChangeInput(e.target.value);
        }
    };

    render() {
        return (
            <div className="b-form__field">
                <input
                    className={`b-form__input`}
                    type={this.props.inputType}
                    onChange={this.handleChangeInput}
                />
                <label className="b-form__label">{this.props.label}</label>
                <div className={`b-form__focus-line`}>&nbsp;</div>
                <div className={`b-form__notification`}>Invalid {this.props.label}</div>
            </div>
        )
    }
}

export default FormField;