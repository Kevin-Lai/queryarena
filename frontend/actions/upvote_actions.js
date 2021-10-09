import * as UpvoteAPIUtil from '../util/upvote_api_util';

export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

const receiveUpvote = (upvote) => {
    return {
        type: RECEIVE_UPVOTE,
        upvote
    }
}

const removeUpvote = (upvoteId) => {
    return {
        type: REMOVE_UPVOTE,
        upvoteId
    }
}


export const createUpvote = (upvote) => {
    return (dispatch) => {
        return UpvoteAPIUtil.createUpvote(upvote).then((upvote)=>{
                return dispatch(receiveUpvote(upvote))
            }
        );
    }
}

export const deleteUpvote = (upvoteId) => {
    return (dispatch) => {
        return UpvoteAPIUtil.deleteUpvote(upvoteId).then(()=>{
                return dispatch(removeUpvote(upvoteId))
            }
        );
    }
}