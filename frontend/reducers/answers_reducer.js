import {
    RECEIVE_ANSWER,
    REMOVE_ANSWER
} from '../actions/answer_actions';

const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);

    switch (action.type) {

        case RECEIVE_ANSWER:
            // action seems to be undefined when creating an answer
            // Cannot read property 'id' of undefined at AnswersReducer (answers_reducer.js:14)

            //newState[action.answer.id] = action.answer;
            return newState;
        case REMOVE_ANSWER:
            delete newState[action.answerId];
            return newState;

        default:
            return state;
    }
}

export default AnswersReducer;