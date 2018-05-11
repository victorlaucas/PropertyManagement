import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const addHeaderNav = (Child, selected) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div className="add-nav">
                        <Link to="/newsletter">
                            <span className={ selected == 'newsletter' ? 'add-nav__selected' : '' }>Newsletter</span>
                        </Link>
                        <Link to="/support-request">
                            <span className={ selected == 'support-request' ? 'add-nav__selected' : '' } >Requests</span>
                        </Link> 
                    </div>
                    <Child {...this.props} />
                </div>
            )
        }
    }
}

export default addHeaderNav;