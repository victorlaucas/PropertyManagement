import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import addHeaderBorder from '../HOC/addHeaderBorder';
import addTitle from '../HOC/addTitle';

class Signin extends Component {

    renderInput(field) {
        return <input {...field.input} type="field.type"/>
    }

    handleFormSubmit({email, password}) {
        this.props.signinUser({email, password})
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <Field name="email" component={this.renderInput} type="text"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={this.renderInput} type="password"/>
                </div>
                <button className="signin-button" action="submit">Sign In</button>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

Signin = reduxForm({form: "signin"})(Signin)
Signin = addTitle(Signin, "Login");
Signin = addHeaderBorder(Signin);

export default connect(mapStateToProps, actions)(Signin);