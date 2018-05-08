import React, { Component } from 'react';

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
            </li>
        ) 
    }
}

export default SupportRequestItem;