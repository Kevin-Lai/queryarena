import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mstp = (state,ownProps) =>{
    return {
        errors: state.errors.session
    }
}

const mdtp = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(mstp, mdtp)(SessionForm);