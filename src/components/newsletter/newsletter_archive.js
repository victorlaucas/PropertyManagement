import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsletterArchive extends Component {

    constructor(props) {
        super(props)

        this.items = []
    }

    renderNewsletterArchiveItem = function(item, index) {
        return (
            <li key={index} className="archive-item">
                <Link className="archive-link-wrapper" to={`/newsletter/detail/${item._id}`}>
                    <div className="archive-item__title">
                        {item.title}
                    </div>
                </Link>
                <div className="archive-item__date">09/15/2030</div>
            </li>
        )
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.archive) {
            nextProps.archive.map((item, index) => {
                this.items.push(this.renderNewsletterArchiveItem(item, index))
            })
        }
    }

    render() {
        return (
            <div className="newsletter-archive">
                <div className="archive__title">Archive</div>
                <ul>
                    {
                        this.items
                    }
                </ul>
            </div>
        )
    }
}

export default NewsletterArchive;