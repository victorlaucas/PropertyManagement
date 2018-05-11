import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class NewsletterContent extends Component {

    renderItem() {
        if(this.props.latestItem) {
            return (
                <div className="newsletter-content">
                    <div className="image-container">
                        <img src={this.props.latestItem.imageUrl}/>
                        <h2>{this.props.latestItem.title}</h2>

                        <Link to={`/newsletter/edit/${this.props.latestItem._id}`}>
                            <div className="action edit-newsletter">
                                <FontAwesomeIcon icon="pencil-alt"/>
                            </div>
                        </Link>
                        <Link to={`/newsletter/add`}>
                            <div className="action add-newsletter">
                                <FontAwesomeIcon icon="plus"/>
                            </div>
                        </Link>
                    </div>
                    <p>
                        {this.props.latestItem.body}
                    </p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderItem()}
            </div>
        )
    }
}

export default NewsletterContent