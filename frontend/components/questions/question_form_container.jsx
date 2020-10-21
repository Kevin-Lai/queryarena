import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createQuestion } from '../../actions/question_actions';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

import QuestionForm from "./question_form"

const mstp = (state,ownProps) =>{
    //debugger

    return {
        question: {
            body: ""
        }
    }
}

const mdtp = (dispatch) => {
    return {
        createQuestion: (question) => dispatch(createQuestion(question)),
        closeModal: () => dispatch(closeModal())
    }
}


export default withRouter(connect(mstp, mdtp)(QuestionForm));