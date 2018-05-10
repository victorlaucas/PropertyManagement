import React, { Component } from 'react';

const addHeaderBorder = (Child) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div className="add-border"></div>
                    <Child {...this.props} />
                </div>
            )
        }
    }
}

export default addHeaderBorder;