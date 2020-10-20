import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';

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
        createQuestion: (question) => dispatch(createQuestion(question))
    }
}


export default connect(mstp, mdtp)(QuestionForm);