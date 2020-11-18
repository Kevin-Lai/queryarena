import * as AnswerAPIUtil from '../util/answer_api_util';

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

const receiveAnswer = (answer) => {
    return {
        type: RECEIVE_ANSWER,
        answer
    }
}

const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}


export const createAnswer = (answer) => {
    return (dispatch) => {
        return AnswerAPIUtil.createAnswer(answer).then((answer)=>{
                return dispatch(receiveAnswer(answer))
            }
        );
    }
}

export const updateAnswer = (answer) => {
    return (dispatch) => {
        return AnswerAPIUtil.updateAnswer(answer).then((answer)=>{
                return dispatch(receiveAnswer(answer))
            }
        );
    }
}

export const deleteAnswer = (answerId) => {
    return (dispatch) => {
        return AnswerAPIUtil.deleteAnswer(answerId).then(()=>{
                return dispatch(removeAnswer(answerId))
            }
        );
    }
}