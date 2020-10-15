import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

const mstp = (state,ownProps) =>{
    return {
        formType: "Login",
        errors: state.errors.session
    }
}

const mdtp = (dispatch) => {
    return {
        submitEvent: (user) => dispatch(signIn(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(mstp, mdtp)(SignInForm);