import { connect } from 'react-redux';
import { signIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state,ownProps) =>{
    return {
        formType: "Sign In"
    }
}

const mdtp = (dispatch) => {
    return {
        submitEvent: (user) => dispatch(signIn(user))
    }
}


export default connect(mstp, mdtp)(SessionForm);