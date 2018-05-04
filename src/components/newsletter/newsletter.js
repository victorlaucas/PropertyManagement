import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterArchive from './newsletter_archive';

class Newsletter extends Component {
    
    componentDidMount() {
        this.props.fetchNewsletterArchive();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div style={{width: '200px', height: '200px', backgroundColor: 'skyblue'}}>
                        02 jan 18
                    </div> 

                    <NewsletterArchive archive={this.props.archive}/>
      
                </div>
                <div className="col-md-9">
                    main content. the latest newsletter.
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return { archive: state.newsletter.archive }
}

export default connect(mapStateToProps, actions)(Newsletter);