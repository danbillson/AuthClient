import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SignOut = ({ signOut }) => {
    useEffect(() => {
        signOut();
    }, []);

    return <div className="content">Sad to see you leave</div>;
};

export default connect(
    null,
    actions
)(SignOut);
