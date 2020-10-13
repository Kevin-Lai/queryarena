import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGNOUT_CURRENT_USER = "SIGNOUT_CURRENT_USER";

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

// signUp(user)
// signIn(user)
// signOut()

export const signUp = (user) => {
    return (dispatch) => {
        return SessionAPIUtil.signUp(user).then( (user) => {
            return dispatch(receiveCurrentUser(user));
        })
    }
}

export const signIn = (user) => {
    return (dispatch) => {
        return SessionAPIUtil.signIn(user).then((user) => {
            return dispatch(receiveCurrentUser(user))
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        return SessionAPIUtil.signOut().then(() => {
            return dispatch(signOutCurrentUser())
        })
    }
}