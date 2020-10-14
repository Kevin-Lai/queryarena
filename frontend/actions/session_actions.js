import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const signOutCurrentUser = () => {
    return {
        type: SIGNOUT_CURRENT_USER
    }
}


const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    };
};
  

// signUp(user)
// signIn(user)
// signOut()

export const signUp = (user) => {
    return (dispatch) => {
        return SessionAPIUtil.signUp(user).then(
            (user) => {
                return dispatch(receiveCurrentUser(user));
            },
            (errors) => {
                return dispatch(receiveErrors(errors.responseJSON))
            }
        )
    }
}

export const signIn = (user) => {
    return (dispatch) => {
        return SessionAPIUtil.signIn(user).then(
            (user) => {
                return dispatch(receiveCurrentUser(user))
            },
            (errors) => {
                //debugger
                return dispatch(receiveErrors(errors.responseJSON))
            }
        )
    }
}

export const signOut = () => {
    return (dispatch) => {
        return SessionAPIUtil.signOut().then(() => {
            return dispatch(signOutCurrentUser())
        })
    }
}

export const clearErrors = () => {
    return (dispatch) => {
        return dispatch(receiveErrors( [] ));
    }
}