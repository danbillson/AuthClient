import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
    const ComposedComponent = props => {
        useEffect(() => {
            if (!props.auth) {
                props.history.push('/');
            }
        }, [props.auth]);

        return <ChildComponent {...props} />;
    };

    const mapStateToProps = state => {
        return { auth: state.auth.token };
    };

    return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
