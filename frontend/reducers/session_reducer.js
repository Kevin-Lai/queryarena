import {
    RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER
} from "../actions/session_actions";

// Session should contain the current user's id
const _nullSession = {
    id: null
};

const SessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);

    //debugger

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // the user is the prop from the session_actions
            newState[id] = action.user.id;
            return newState;
        case SIGNOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}

export default SessionReducer;