import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';

import InfoBox from '../infoBox';
import SupportRequestContent from './supportRequest_content';

import addHeaderNav from '../HOC/addHeaderNav';


class SupportRequest extends Component { 

    //
    componentDidMount() {
        this.props.fetchSupportRequests();
    }

    render() {
        return (
            <div>
                support request 
                <div>
                    <Link to="/support-request/add">
                        <div>Add Request</div>
                    </Link>
                    <div className="row">
                        <div className="col-md-3">
                            <InfoBox type="pending"/>
                            <InfoBox type="in-progress"/>
                            <InfoBox type="complete"/>
                        </div>
                        <div className="col-md-9">
                            <SupportRequestContent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { state: state.supportRequest } 
}

SupportRequest = addHeaderNav(SupportRequest);

export default connect(mapStateToProps, actions)(SupportRequest);