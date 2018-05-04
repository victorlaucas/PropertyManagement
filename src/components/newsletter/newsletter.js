import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Newsletter extends Component {

    componentDidMount() {
        this.props.fetchNewsletterArchive();
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    console.log(state.newsletter.archive);
    return { archive: state.newsletter.archive }
}

export default connect(mapStateToProps, actions)(Newsletter);