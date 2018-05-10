import React, { Component } from 'react';

const addTitle = (Child, title) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div className="add-title">
                        <div className="add-title__text">
                            {title}
                        </div>
                    </div>
                    <Child {...this.props} />
                </div>
            )
        }
    }
}

export default addTitle;