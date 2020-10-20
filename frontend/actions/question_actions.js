import * as QuestionAPIUtil from '../util/question_api_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";

const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question
    }
}


export const fetchQuestions = () => {
    return (dispatch) => {
        return QuestionAPIUtil.fetchQuestions().then((questions)=>{
                return dispatch(receiveQuestions(questions))
            }
        );
    }
}



export const fetchQuestion = (questionId) => {
    return (dispatch) => {
        return QuestionAPIUtil.fetchQuestion(questionId).then((question)=>{
                return dispatch(receiveQuestion(question))
            }
        );
    }
}

export const createQuestion = (question) => {
    return (dispatch) => {
        return QuestionAPIUtil.createQuestion(question).then((question)=>{
                return dispatch(receiveQuestion(question))
            }
        );
    }
}