import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import QuestionFormContainer from "../questions/question_form_container"
import QuestionEditContainer from "../questions/question_edit_container"

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.formType) {
        case 'Add Question':
            component = <QuestionFormContainer user={modal.user}/>;
            break;
        case 'Edit Question':
            component = <QuestionEditContainer question={modal.question}/>;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mstp = state => {
    return {
        modal: state.ui.modal
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mstp, mdtp)(Modal);