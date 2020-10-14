import {
    RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER
} from "../actions/session_actions";

// Session should contain the current user's id
const _nullSession = {
    currentUserId: null
};

const SessionReducer = (state = _nullSession, action) => {
    let newState = Object.assign({},state);
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //debugger

            // the user is the prop from the session_actions
            newState = {currentUserId: action.currentUser.id}
            return newState;
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default SessionReducer;