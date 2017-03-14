import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as pageActions from '../../actions/page';

function mapStateToProps(state) {
    return {
        pageIsScrolling: state.page.pageIsScrolling
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pageScroll: pageActions.pageScroll
    }, dispatch)
}

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

    onHandleScroll = (e) => {
       console.log(window.pageYOffset);
        // console.log(this);
        //this.props.pageScroll(true);
        console.log(this.props.pageIsScrolling);
        // console.log(window.pageYOffset);
        //
        // console.log(this);
        //
        if (window.pageYOffset && !this.props.pageIsScrolling) {
            console.log('one');
            this.props.pageScroll(true);
        } else if (!window.pageYOffset) {
            console.log('two');
            this.props.pageScroll(false);
        }
    };

    render() {
        const items = [
            {name: 'About', route: 'about'},
            {name: 'Blog', route: 'blog'}
        ];
        //console.log(this.props);
        console.log(this.props.pageIsScrolling);

        this.onHandleScroll();

        return (
            <header className="b-header">
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
