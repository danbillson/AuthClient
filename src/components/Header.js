import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    return (
        <header className="header">
            <Link to="/">Redux Auth</Link>
            {auth ? (
                <>
                    <Link to="/feature">Feature</Link>
                    <Link to="/signout">Sign Out</Link>
                </>
            ) : (
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </>
            )}
        </header>
    );
};

const mapStateToProps = state => ({ auth: state.auth.token });

export default connect(mapStateToProps)(Header);
