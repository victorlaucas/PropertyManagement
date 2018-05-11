import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsletterContent extends Component {

    renderItem() {
        if(this.props.latestItem) {
            return (
                <div className="newsletter-content">
                    <div className="image-container">
                        <img src={this.props.latestItem.imageUrl}/>
                        <h2>{this.props.latestItem.title}</h2>

                        <Link to={`/newsletter/edit/${this.props.latestItem._id}`}>
                            <span>EditNewsletter</span>
                        </Link>
                        <Link to={`/newsletter/add`}>
                            <span>AddNewsletter</span>
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