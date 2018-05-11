import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class InfoBox extends Component {

    handleSelected() {
        console.log('trying to handle selected info box')
        this.props.selectRequestType(this.props.type)
    }

    render() {
        return (
            <a onClick={() => this.handleSelected()}>
                <div className={`info-box`}>
                    <div className="info-box__text">
                        02
                    </div>
                    <div className="info-box__sub-text">
                        {this.props.type}
                    </div>
                </div> 
            </a>
        )
    }
}

export default connect(null, actions)(InfoBox);