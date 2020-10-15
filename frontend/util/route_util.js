import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mstp = (state) => {
    //debugger
    return {
        signedIn: Boolean(state.session.currentUserId)
    }
}

const Auth = ({ signedIn, path, component: Component }) => {
    //debugger
    return (
        <Route path={path}
            render={ props => (
                signedIn ? <Redirect to="/" /> : <Component {...props} />
            )}
        >
        </Route>
    )
}

const Protected = ({ signedIn, path, component: Component }) => {
    return (
        <Route path={path}
        render={ props => (
            signedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
    >
    </Route>
    )
}

export const AuthRoute = withRouter(connect(mstp)(Auth));
export const ProtectedRoute = withRouter(connect(mstp)(Protected));