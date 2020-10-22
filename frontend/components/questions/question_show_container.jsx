import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';

import QuestionShow from "./question_show"

const mdtp = (dispatch) => {
    return {
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId))
    }
}

export default connect(null, mdtp)(QuestionShow);