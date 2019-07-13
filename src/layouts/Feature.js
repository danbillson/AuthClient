import React from 'react';
import requireAuth from '../components/requireAuth';

const Feature = () => {
    return <div className="content">This is the feature!</div>;
};

export default requireAuth(Feature);
