import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signUp = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(
            'http://localhost:3090/signup',
            formProps
        );

        dispatch({ type: AUTH_USER, payload: data.token });
        localStorage.setItem('token', data.token);
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error || 'An error occured'
        });
    }
};

export const signIn = (formProps, callback) => async dispatch => {
    try {
        const { data } = await axios.post(
            'http://localhost:3090/signin',
            formProps
        );

        dispatch({ type: AUTH_USER, payload: data.token });
        localStorage.setItem('token', data.token);
        callback();
    } catch (error) {
        dispatch({
            type: AUTH_ERROR,
            payload: error.response.data.error || 'An error occured'
        });
    }
};

export const signOut = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};
