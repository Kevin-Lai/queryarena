import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import AnswerIndex from './answer_index';

const mstp = (state) =>{
    return {
        questions: Object.values(state.entities.questions),
        user: Object.values(state.entities.users)[0]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions())
    }
}

export default connect(mstp, mdtp)(AnswerIndex);