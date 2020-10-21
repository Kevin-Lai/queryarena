import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';

import QuestionShow from "./question_show"

const mstp = (state,ownProps) =>{
    //debugger

    return {
        question: state.entities.questions[ownProps.match.params.questionId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
    }
}


export default connect(mstp, mdtp)(QuestionShow);