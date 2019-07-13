import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

const SignIn = ({ signIn, history, handleSubmit, errorMessage }) => {
    const onSubmit = formProps => {
        signIn(formProps, () => {
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
                Sign In
            </button>
            <p class="action">
                Don't have an account? <Link to="/signup">Sign Up</Link>
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
    reduxForm({ form: 'signin' })
)(SignIn);
