import { connect } from 'react-redux';
import { fetchQuestion, deleteQuestion } from '../../actions/question_actions';
import { openModal } from '../../actions/modal_actions';
import { createAnswer, updateAnswer, deleteAnswer } from '../../actions/answer_actions';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';

import QuestionShow from "./question_show"

const mstp = (state,ownProps) =>{
    return {
        currentUserId: state.session.currentUserId
    }
}

const mdtp = (dispatch) => {
    return {
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        openModal: modal => dispatch(openModal(modal)),
        createAnswer: (answer) => dispatch(createAnswer(answer)),
        updateAnswer: (answer) => dispatch(updateAnswer(answer)),
        deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
        createUpvote: (upvote) => dispatch(createUpvote(upvote)),
        deleteUpvote: (upvoteId) => dispatch(deleteUpvote(upvoteId))
    }
}

export default connect(mstp, mdtp)(QuestionShow);