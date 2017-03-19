import React, { Component } from 'react';

import './Popup.css';

class PopupOverlay extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className="b-popup-overlay">Overlay</div>
        )
    }
}

export default PopupOverlay;
