import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../actions/session_actions';
import SignInForm from './sign_in_form';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

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


export default withRouter(connect(mstp, mdtp)(SignInForm));