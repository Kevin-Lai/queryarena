import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

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


export default connect(mstp, mdtp)(SignUpForm);