import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetail extends Component {

    componentDidMount() {
        console.log(`the id is: ${this.props.match.params._id}`)
        this.props.fetchNewsletterById(this.props.match.params._id)
    }


    render() {
        return (
            <div>
                newsletter detail
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.newsletter.fetchedItem)
    return {
        fetchedItem: state.newsletter.fetchedItem
    }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);