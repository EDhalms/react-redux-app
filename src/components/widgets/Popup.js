import React, { Component } from 'react';

import './Popup.css';

class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`b-popup-wrap ${this.props.popupIsOpen ? 'open' : ''}`}>
                <div
                    className={`b-popup-overlay ${this.props.popupIsOpen ? 'open' : ''}`}
                    onClick={this.props.handlePopup.bind(this, this.props.actionType, !this.props.popupIsOpen, false)}
                >
                    Overlay
                </div>
                <div className={`b-popup ${this.props.popupIsOpen ? 'open' : ''}`}>
                    <div className="b-popup__container">
                        <div
                            className="b-popup__close-btn"
                            onClick={this.props.handlePopup.bind(this, this.props.actionType, !this.props.popupIsOpen, false)}
                        >
                            Close
                        </div>
                        <div className="b-popup__content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Popup;
