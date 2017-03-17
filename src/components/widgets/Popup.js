import React, { Component } from 'react';

import './Popup.css';

class Popup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="b-popup-wrap">
                <div className="b-popup__overlay">Overlay</div>
                <div className="b-popup">
                    <div className="b-popup__container">
                        <div className="b-popup__close-btn">Close</div>
                        <div className="b-popup__content">
                            {this.props.content()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Popup;
