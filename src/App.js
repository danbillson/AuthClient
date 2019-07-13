import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Welcome from './layouts/Welcome';
import SignUp from './layouts/SignUp';
import SignIn from './layouts/SignIn';
import SignOut from './layouts/SignOut';
import Feature from './layouts/Feature';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" exact component={Welcome} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signout" exact component={SignOut} />
            <Route path="/feature" exact component={Feature} />
        </BrowserRouter>
    );
};

export default App;
