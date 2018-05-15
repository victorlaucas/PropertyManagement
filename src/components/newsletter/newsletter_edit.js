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
        return (
            <div>
                <label htmlFor={field.input.name}>{field.input.name}</label>
                <input className="form-control" {...field.input} />
            </div>
        ) 
    }

    handleFormSubmit({title, body}) {
        this.props.saveNewsletterEdit({title, body}, this.props.match.params._id, () => {
            this.props.history.push('/newsletter');
        })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form className="add-newsletter-form"onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="add-newsletter-form__title">
                    <label htmlFor="title">Newsletter Title</label>
                    <Field name="title" component={(field) => <input {...field.input} />} type="text"/>
                </div>
                <div className="add-newsletter-form__body">
                    <label htmlFor="body">Body</label>
                    <Field name="body" component={(field) => <textarea {...field.input} />} type="textarea"/>
                </div>
         
                <Link to="/newsletter">
                    <div className="add-newsletter-form__cancel">
                        <p>Cancel</p>
                    </div>
                </Link>
   
                <button className="add-newsletter-form__submit" action="submit">Submit</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { initialValues: state.newsletter.fetchedItem } 
}

EditNewsletter = reduxForm(
    {
        form: "editNewsletter",
        enableReinitialize: true
    }
)(EditNewsletter)

export default connect(mapStateToProps, actions)(EditNewsletter);