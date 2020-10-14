import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state,ownProps) =>{
    return {
        formType: "Sign Up",
        errors: state.errors.session
    }
}

const mdtp = (dispatch) => {
    return {
        submitEvent: (user) => dispatch(signUp(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(mstp, mdtp)(SessionForm);