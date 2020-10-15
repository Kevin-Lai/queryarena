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
            <div>
                <h2>A place to share knowledge and better understand the world</h2>
                <SignUpFormContainer history={this.props.history}/>
                <SignInFormContainer history={this.props.history}/>
                {this.props.errors}
            </div>
        )
    }
}

export default SessionForm;