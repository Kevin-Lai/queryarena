import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { signOut } from '../../actions/session_actions';

import UserShow from './user_show';

const mstp = (state,ownProps) =>{
    //debugger

    // you must pass in currentUserId first, so that after the user is fetched,
    // then the user will be in the state.entities.users
    return {
        currentUserId: state.session.currentUserId,
        user: state.entities.users[state.session.currentUserId]
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}


export default connect(mstp, mdtp)(UserShow);