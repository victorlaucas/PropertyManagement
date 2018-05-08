import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EditSupportRequest extends Component {

    componentDidMount() {
        // this.props.fetchSupportRequestById(this.props.match.params._id)
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
        // this.props.saveSupportRequestById({title, body}, this.props.match.params._id, () => {
        //     this.props.history.push('/support-request');
        // })
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="title" component={this.renderInput} type="text"/>
                <Field name="body" component={this.renderInput} type="textarea"/>
                {/* <img src={this.props.initialValues.imageUrl}/> */}
                <Link to="/newsletter"><div>Cancel</div></Link>
                <button action="submit" className="btn btn-primary">Save</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { state }
    // return { initialValues: state.newsletter.fetchedItem } 
}

EditSupportRequest = reduxForm(
    {
        form: "editSupportRequest",
        enableReinitialize: true
    }
)(EditSupportRequest)

export default connect(mapStateToProps, actions)(EditSupportRequest);