import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import NewsletterArchive from './newsletter_archive';
import NewsletterContent from './newsletter_content';

import addHeaderNav from '../HOC/addHeaderNav';

class Newsletter extends Component {
    
    componentDidMount() {
        this.props.fetchNewsletterArchive();
    }

    render() {
        return (
            <div className="newsletter">
                <div className="newsletter__side">
                    <div style={{width: '200px', height: '200px', backgroundColor: 'skyblue'}}>
                        02 jan 18
                    </div> 

                    <NewsletterArchive archive={this.props.archive}/>
                </div>
                <div>
                    <NewsletterContent latestItem={this.props.latestItem} />
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        archive: state.newsletter.archive,
        latestItem: state.newsletter.latestItem
    }
}

Newsletter = addHeaderNav(Newsletter, 'newsletter')

export default connect(mapStateToProps, actions)(Newsletter);