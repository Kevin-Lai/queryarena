import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateQuestion } from '../../actions/question_actions';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

import QuestionEdit from "./question_edit"

const mdtp = (dispatch) => {
    return {
        updateQuestion: (question) => dispatch(updateQuestion(questionId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(null, mdtp)(QuestionEdit));