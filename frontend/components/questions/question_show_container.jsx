import { connect } from 'react-redux';
import { fetchQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';

import QuestionShow from "./question_show"

const mdtp = (dispatch) => {
    return {
        fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
        createAnswer: (answer) => dispatch(createAnswer(answer))
    }
}

export default connect(null, mdtp)(QuestionShow);