import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EditNewsletter extends Component {

    componentDidMount() {
        this.props.fetchNewsletterById(this.props.match.params._id)
    }
    
    renderInput(field) {
        return <input className="form-control" {...field.input} type="field.type"/>
    }

    handleFormSubmit({title, body}) {
        console.log('trying to handle submit')
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <label htmlFor="title">Title</label>
                <Field name="title" component={this.renderInput} type="text"/>
                <label htmlFor="body">Body</label>
                <Field name="body" component={this.renderInput} type="text"/>

                <Link to="/newsletter"><div>Cancel</div></Link>
                <button action="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.newsletter.fetchedItem)
    return { fetchedItem: state.newsletter.fetchedItem } 
}

EditNewsletter = reduxForm({form: "editNewsletter"})(EditNewsletter)

export default connect(mapStateToProps, actions)(EditNewsletter);