import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchQuestions } from '../../actions/question_actions';
import QuestionIndex from './question_index';

const mstp = (state) =>{
    return {
        questions: Object.values(state.entities.questions)
    }
}

const mdtp = (dispatch) => {
    return {
        fetchQuestions: () => dispatch(fetchQuestions()),
        openModal: modal => dispatch(openModal(modal))
    }
}


export default connect(mstp, mdtp)(QuestionIndex);