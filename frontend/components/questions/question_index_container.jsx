import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionIndex from './question_index';

const mstp = (state) =>{
    return {
        questions: Object.values(state.entities.questions)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions())
    }
}


export default connect(mstp, mdtp)(QuestionIndex);