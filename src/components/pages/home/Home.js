import React, { Component } from 'react';

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

    onChange = (e) => {
        this.props.toggleHomeTabs(+e.target.getAttribute('data-index'));
    };

    render() {

        const items = [
            {id: '1', label: 'Item 1', description: 'Item 1 - content one'},
            {id: '2', label: 'Item 2', description: 'Item 2 - content two'},
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
            </div>
        );
    }
}

export default Home;