import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state,ownProps) =>{
    return {
        formType: "Sign Up"
    }
}

const mdtp = (dispatch) => {
    return {
        submitEvent: (user) => dispatch(signUp(user))
    }
}


export default connect(mstp, mdtp)(SessionForm);