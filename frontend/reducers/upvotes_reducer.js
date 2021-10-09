import {
    RECEIVE_UPVOTE,
    REMOVE_UPVOTE
} from '../actions/upvote_actions';

const UpvotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);

    switch (action.type) {

        case RECEIVE_UPVOTE:
            //newState[action.upvote.id] = action.upvote;
            return newState;
        case REMOVE_UPVOTE:
            delete newState[action.upvoteId];
            return newState;

        default:
            return state;
    }
}

export default UpvotesReducer;