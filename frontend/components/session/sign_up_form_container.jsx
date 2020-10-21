import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

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


export default withRouter(connect(mstp, mdtp)(SignUpForm));