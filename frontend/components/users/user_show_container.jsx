import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mstp = (state,ownProps) =>{
    //debugger
    return {
        currentUserId: state.session.currentUserId
    }
}

const mdtp = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}


export default connect(mstp, mdtp)(UserShow);