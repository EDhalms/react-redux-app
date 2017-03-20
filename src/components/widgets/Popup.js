import React, { Component } from 'react';

import './Popup.css';

class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`b-popup ${this.props.popupIsOpen ? 'open' : ''}`}>
                <div className="b-popup__container">
                    <div className="b-popup__close-btn" onClick={this.props.handlePopup}>Close</div>
                    <div className="b-popup__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Popup;
