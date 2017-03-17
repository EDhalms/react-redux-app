import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    renderNavList = (items) => {
        const arr = items.map((item, index) => {
            return (
                <li className="b-header__item" key={index}>
                    <Link
                        className={`b-header__link ${this.props.route === '/' + item.route ? 'active' : ''}`}
                        to={`/${item.route}`}
                    >{item.name}</Link>
                </li>
            );
        });

        return arr;
    };

    componentDidMount() {
        document.addEventListener('scroll', this.onHandleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onHandleScroll);
    }

    onHandleScroll = () => {
        if (window.pageYOffset && !this.props.pageIsScrolling) {
            this.props.pageScroll(true);
        } else if (!window.pageYOffset) {
            this.props.pageScroll(false);
        }
    };

    render() {

        const items = [
            {name: 'About', route: 'about'},
            {name: 'Blog', route: 'blog'}
        ];
        //this.onHandleScroll();

        return (
            <header className={`b-header ${this.props.pageIsScrolling ? 'scroll' : ''}`}>
                <div className="b-header__container g-container g-clearfix">
                    <div className="b-header__logo">
                        <a href="/">React-redux-app</a>
                    </div>
                    <nav className="b-header__nav">
                        <ul className="b-header__list g-clearfix">
                            {this.renderNavList(items)}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;


