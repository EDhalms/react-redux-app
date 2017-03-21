import React, { Component } from 'react';

import PopupOverlay from '../../widgets/PopupOverlay';
import Popup from '../../widgets/Popup';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
    };

    renderTabsNavList = (items) => {
        const arr = items.map((item, index) => {
            return (
                <li className={`b-tabs__item ${index === this.props.currentTab ? 'active' : ''}`}
                    key={index}
                    data-index={index}
                    onClick={this.onChange}
                >{item.label}</li>
            );
        });

        return arr;
    };

    renderTabsContentList = (items) => {
        const arr = items.map((item, index) => {
            return (
                <div className={`b-tabs__content ${index === this.props.currentTab ? 'active' : ''}`}
                     key={index}
                >{item.description}</div>
            );
        });

        return arr;
    };

    /*Templates*/
    firstTabDescTemplate = () => {
        return (
            <div className="b-tabs__description">
                <p className="b-tabs__description-paragraph">Test Template for first tab</p>
                <p className="b-tabs__description-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button
                    className="b-tabs__btn g-btn"
                    onClick={this.handlePopup}
                >Show single popup</button>
            </div>
        );
    };

    firstTabPopup = () => {
        return (
            <div>
                <h2 className="b-popup__title">Single popup</h2>
                <p className="b-popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    };
    /*Templates*/

    onChange = (e) => {
        this.props.toggleHomeTabs(+e.target.getAttribute('data-index'));
    };

    handlePopup = (actionType, popupStatus) => {
        this.props.handlePopup(actionType, popupStatus);

        this.handleOverlay(!this.props.overLayIsOpen);
    };

    handleOverlay = (flag) => {
        if (flag) { //SHOW OVERLAY
            document.body.className = 'g-no-scroll';
        } else {    //HIDE OVERLAY
            document.body.className = '';
        }
        this.props.handleOverlay(flag);
    };

    render() {

        const items = [
            {id: '1', label: 'Item 1', description: this.firstTabDescTemplate()},
            {id: '2', label: 'Item 2', description: 'Item 2 - content two'},
            {id: '3', label: 'Item 3', description: 'Item 3 - content tree'}
        ];

        return (
            <div className={`b-home`}>
                <div className="g-banner m-banner_home">
                    <div className="g-banner__container g-container">
                        <h1 className="g-banner__title">Home</h1>
                    </div>
                </div>
                <div className="b-home__container g-container">
                    <div className="b-tabs">
                        <ul className="b-tabs__nav">
                            {this.renderTabsNavList(items)}
                        </ul>
                        <div className="b-tabs__content-container">
                            {this.renderTabsContentList(items)}
                        </div>
                    </div>
                </div>

                <PopupOverlay
                    overLayIsOpen={this.props.overLayIsOpen}
                    handlePopup={this.handlePopup.bind(this, 'HANDLE_WELCOME_POPUP', !this.props.welcomePopupIsOpen)}
                />
                <Popup
                    //content={this.firstTabPopup}
                    popupIsOpen={this.props.welcomePopupIsOpen}
                    handlePopup={this.handlePopup.bind(this, 'HANDLE_WELCOME_POPUP', !this.props.welcomePopupIsOpen)}>
                    {this.firstTabPopup()}
                </Popup>
            </div>
        );
    }
}

export default Home;