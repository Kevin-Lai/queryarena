import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateQuestion } from '../../actions/question_actions';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

import QuestionEdit from "./question_edit"

const mstp = (state) =>{
    // debugger
    return {
        question: Object.values(state.entities.questions)[0]
    }
}

const mdtp = (dispatch) => {
    return {
        updateQuestion: (question) => dispatch(updateQuestion(question)),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mstp, mdtp)(QuestionEdit));