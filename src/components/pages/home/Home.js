import React, { Component } from 'react';

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
    //TABS
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
                    onClick={this.handlePopup.bind(this, 'HANDLE_WELCOME_POPUP', !this.props.welcomePopupIsOpen, false)}
                >Show welcome popup</button>
            </div>
        );
    };

    secondTabDescTemplate = () => {
        return (
            <div className="b-tabs__description">
                <p className="b-tabs__description-paragraph">Test Template for first tab</p>
                <p className="b-tabs__description-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
                    amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam
                    aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea
                    voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas
                    nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
                    voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate
                    non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                    est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis
                    voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
                    aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                    consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <button
                    className="b-tabs__btn g-btn"
                    onClick={this.handlePopup.bind(this, 'HANDLE_FIRST_STEP_POPUP', !this.props.firstStepPopup, false)}
                >Show first step popup</button>
            </div>
        );
    };
    //TABS

    //POPUPS
    welcomePopupContentTemplate = () => {
        return (
            <div>
                <h2 className="b-popup__title">Welcome popup</h2>
                <p className="b-popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    };

    firstStepPopupContentTemplate = () => {
        return (
            <div>
                <h2 className="b-popup__title">First step popup</h2>
                <p className="b-popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button
                    className="b-popup__btn g-btn"
                    onClick={this.handlePopup.bind(this, 'HANDLE_FIRST_STEP_POPUP', !this.props.firstStepPopup, true, 'HANDLE_SECOND_STEP_POPUP', !this.props.secondStepPopup)}
                >To next step</button>
            </div>
        );
    };

    secondStepPopupContentTemplate = () => {
        return (
            <div>
                <h2 className="b-popup__title">Second step popup</h2>
                <p className="b-popup__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    };
    //POPUPS

    /*Templates*/

    onChange = (e) => {
        this.props.toggleHomeTabs(+e.target.getAttribute('data-index'));
    };

    handlePopup = (actionType, popupStatus, isClosePrevPopup, actionTypeNextPopup, popupStatusNextPopup) => {
        if (isClosePrevPopup) {//if need open popup from prev popup
            this.props.handlePopup(actionType, popupStatus);
            this.props.handlePopup(actionTypeNextPopup, popupStatusNextPopup);
        } else {
            this.props.handlePopup(actionType, popupStatus);
        }

        //this.handleNoScrollPage(popupStatus, popupStatusNextPopup);
    };

    handleNoScrollPage = (popupStatus, popupStatusNextPopup) => {

        console.log('popupStatus - ', popupStatus);
        console.log('popupStatusNextPopup - ', popupStatusNextPopup);
        console.log('popupStatusNextPopup - ', !!popupStatusNextPopup);
        console.log('popupStatus || popupStatusNextPopup - ', popupStatus || popupStatusNextPopup);

        if (popupStatus || popupStatusNextPopup) {
            document.body.className = 'g-no-scroll';
        } else {
            document.body.className = '';
        }

    };

    render() {

        const items = [
            {id: '1', label: 'Item 1', description: this.firstTabDescTemplate()},
            {id: '2', label: 'Item 2', description: this.secondTabDescTemplate()},
            {id: '3', label: 'Item 3', description: 'Item 3 - content tree'}
        ];

        return (
            <div className="b-home">
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

                <Popup
                    //content={this.firstTabPopup}
                    actionType={'HANDLE_WELCOME_POPUP'}
                    popupIsOpen={this.props.welcomePopupIsOpen}
                    handlePopup={this.handlePopup}>
                    {this.welcomePopupContentTemplate()}
                </Popup>

                <Popup
                    actionType={'HANDLE_FIRST_STEP_POPUP'}
                    popupIsOpen={this.props.firstStepPopup}
                    handlePopup={this.handlePopup}>
                    {this.firstStepPopupContentTemplate()}
                </Popup>
                <Popup
                    actionType={'HANDLE_SECOND_STEP_POPUP'}
                    popupIsOpen={this.props.secondStepPopup}
                    handlePopup={this.handlePopup}>
                    {this.secondStepPopupContentTemplate()}
                </Popup>

            </div>
        );
    }
}

export default Home;