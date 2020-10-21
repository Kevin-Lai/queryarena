import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import SessionFormContainer from '../components/session/session_form_container';
import QuestionIndexContainer from "../components/questions/question_index_container"

const mstp = (state) => {
    //debugger
    return {
        signedIn: Boolean(state.session.currentUserId)
    }
}

const Auth = ({ signedIn, path, component: Component }) => {
    //debugger

    // The user must NOT be signed in to access this route.
    // If the user is signed in, then this route will no longer be accessable.
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

    // The user must be signed in to access this route.
    // If the user is NOT signed in, then this route will no longer be accessable.
    return (
        <Route path={path}
            render={ props => (
            signedIn ? <Component {...props} /> : <Redirect to="/" />
            )}
        >
        </Route>
    )
}

const Entry = ({ signedIn, path }) => {

    // The user must be signed in to access this route.
    // If the user is NOT signed in, then this route will no longer be accessable.
    return (
        <Route path={path}
        render={ props => (
            signedIn ? <QuestionIndexContainer history={props.history}/> : <SessionFormContainer history={props.history}/>
        )}
    >
    </Route>
    )
}

export const AuthRoute = withRouter(connect(mstp)(Auth));
export const ProtectedRoute = withRouter(connect(mstp)(Protected));

export const EntryRoute = withRouter(connect(mstp)(Entry));