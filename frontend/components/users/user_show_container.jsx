import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchQuestions } from '../../actions/question_actions';

import UserShow from './user_show';

const mstp = (state,ownProps) =>{
    // must pass in currentUserId first, so that after the user is fetched,
    // then the user will be in the state.entities.users
    return {
        currentUserId: state.session.currentUserId,
        user: state.entities.users[state.session.currentUserId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchQuestions: () => dispatch(fetchQuestions())
    }
}

export default connect(mstp, mdtp)(UserShow);