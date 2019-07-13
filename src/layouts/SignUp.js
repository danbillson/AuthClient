import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

const SignUp = ({ signUp, history, handleSubmit, errorMessage }) => {
    const onSubmit = formProps => {
        signUp(formProps, () => {
            history.push('/feature');
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            <fieldset>
                <label>Password</label>
                <Field
                    name="password"
                    type="text"
                    component="input"
                    autoComplete="none"
                />
            </fieldset>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <button className="button" type="submit">
                Sign Up
            </button>
            <p class="action">
                Already have an account? <Link to="/signin">Sign In</Link>
            </p>
        </form>
    );
};

const mapStateToProps = state => ({ errorMessage: state.auth.error });

export default compose(
    connect(
        mapStateToProps,
        actions
    ),
    reduxForm({ form: 'signup' })
)(SignUp);
