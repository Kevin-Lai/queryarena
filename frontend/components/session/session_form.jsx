import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInFormContainer from "./sign_in_form_container"
import SignUpFormContainer from "./sign_up_form_container"

class SessionForm extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    render(){
        //debugger

        // You need to load the "container" components (SignUpFormContainer and SignInFormContainer),
        // and NOT the "form" components (SignUpForm and SignInForm)
        return (
            <div className="session-form-background">
                <div className="session-center-block">
                    <div className="session-form-header">
                        <h1 className="app-title">Query Arena</h1>
                        <h2 className="app-description">A place to share knowledge and better understand the world</h2>
                    </div>
                    <div className="main-session-forms">
                        <SignUpFormContainer history={this.props.history}/>
                        <SignInFormContainer history={this.props.history}/>
                    </div>
                    <div>
                        {this.props.errors}
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;