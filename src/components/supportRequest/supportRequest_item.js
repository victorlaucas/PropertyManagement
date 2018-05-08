import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SupportRequestItem extends Component {
    render() {
        return (
            <li>
                <div>
                    icon
                </div>
                <div>
                    <div>
                        <div>{this.props.title}</div>
                        <div>{this.props.tenant} - Unit {this.props.unit}</div>
                    </div>
                    <div>
                        arrow
                    </div>
                </div>
                <div>
                    action
                </div>
                <div>
                    {this.props.date}
                </div>
                <Link to={`/support-request/edit/${this.props._id}`}>
                    <div>{this.props.body}</div>
                </Link>
            </li>
        ) 
    }
}

export default SupportRequestItem;