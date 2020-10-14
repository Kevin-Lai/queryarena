import React from 'react';
import { Link } from 'react-router-dom';

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
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        //debugger
        // if signUp() or signIn() is successful, then it will redirect to the user's show page.
        this.props.submitEvent(this.state).then( (user) =>
            this.props.history.push("/users/" + user.id)
        );
    }

    handleChange(type){
        //debugger
        return event => {
            this.setState({
                [type]: event.currentTarget.value
            })
        }
    }

    render(){
        //debugger
        if (this.props.formType === "Sign Up"){
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h2>{this.props.formType}</h2>
                        <label>Email: 
                            <input type="email" value={this.state.email} onChange={this.handleChange("email")}/>
                        </label>
                        <label>Password: 
                            <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                        </label>
                        <label>First Name: 
                            <input type="text" value={this.state.first_name} onChange={this.handleChange("first_name")}/>
                        </label>
                        <label>Last Name: 
                            <input type="text" value={this.state.last_name} onChange={this.handleChange("last_name")}/>
                        </label>
                        <input type="submit" value={this.props.formType}/>
                    </form>
                    <Link to="/signin">Already have an account?</Link>
                    {this.props.errors}
                </div>
            )
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Email: 
                        <input type="email" value={this.state.email} onChange={this.handleChange("email")}/>
                    </label>
                    <label>Password: 
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
                <Link to="/signup">Don't have an account?</Link>
                {this.props.errors}
            </div>

        )
    }
}

export default SessionForm;