import { connect } from 'react-redux';
import { signIn, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state,ownProps) =>{
    return {
        formType: "Sign In",
        errors: state.errors.session
    }
}

const mdtp = (dispatch) => {
    return {
        submitEvent: (user) => dispatch(signIn(user)),
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(mstp, mdtp)(SessionForm);