import React, { Component } from 'react';

const addHeader = (Child) => {
    return class extends Component {
        render() {
            return (
                <div className="main-header">
                    <h1>Welcome to The HOA Manager!</h1>
                    <p>Please login to continue</p>
                    <Child />
                </div>
            )
        }
    }
}

export default addHeader;