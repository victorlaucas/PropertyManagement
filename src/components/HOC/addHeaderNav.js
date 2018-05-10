import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const addHeaderNav = (Child) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div className="add-nav">
                        <Link to="/newsletter">
                            <span>Newsletter</span>
                        </Link>
                        <Link to="/support-request">
                            <span>Requests</span>
                        </Link> 
                    </div>
                    <Child {...this.props} />
                </div>
            )
        }
    }
}

export default addHeaderNav;