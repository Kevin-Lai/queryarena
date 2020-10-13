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
    }

    handleSubmit(e){
        e.preventDefault();

        this.props.submitEvent(this.state).then( (user) =>
            this.props.history.push("/users/" + user.id)
        );
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{this.props.formType}</h2>
                <label>Email
                    <input type=""></input>
                </label>
                <label>Password

                </label>
                <label>First Name

                </label>
                <label>Last Name

                </label>
                <input type="submit">{this.props.formType}</input>
            </form>
        )
    }
}

export default SessionForm;