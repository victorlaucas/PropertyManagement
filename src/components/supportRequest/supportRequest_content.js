import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SupportRequestItem from './supportRequest_item';

class SupportRequestContent extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.supportRequests.map((object, index) => {
                            return <SupportRequestItem key={index} {...object}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const supportRequests = state.supportRequest.supportRequests;
    const selected = state.supportRequest.selected

    return {
        supportRequests,
        selected
    }
}

export default connect(mapStateToProps, actions)(SupportRequestContent);