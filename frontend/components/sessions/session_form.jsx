import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        //e.preventDefault();

        // if signUp() or signIn() is successful, then it will redirect to the user's show page.
        this.props.submitEvent(this.state).then( (user) =>
            this.props.history.push("/users/" + user.id)
        );
    }

    render(){
        if (this.props.formType === "Sign Up"){
            return (
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Email: 
                        <input type="email"/>
                    </label>
                    <label>Password: 
                        <input type="password"/>
                    </label>
                    <label>First Name: 
                        <input type="text"/>
                    </label>
                    <label>Last Name: 
                        <input type="text"/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.formType}</h2>
                <label>Email: 
                    <input type="email"/>
                </label>
                <label>Password: 
                    <input type="password"/>
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default SessionForm;