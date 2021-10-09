import {
    RECEIVE_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
} from '../actions/question_actions';

const QuestionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            newState = action.questions;
            return newState;
        case RECEIVE_QUESTION:
            //debugger
            newState[action.question.id] = action.question;
            return newState;
        case REMOVE_QUESTION:
            delete newState[action.questionId];
            return newState;            
        default:
            return state;
    }
}

export default QuestionReducer;