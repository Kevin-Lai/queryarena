import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component{
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
        this.props.submitEvent(this.state).then( (action) => {
                //debugger
                return this.props.history.push("/users/" + action.currentUser.id)
            }
        );
    }


    handleChange(fieldType){
        //debugger
        return event => {
            this.setState({
                [fieldType]: event.currentTarget.value
            });
        }
    }

    render(){
        //debugger
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label className="input-box">Email: 
                        <input type="email" value={this.state.email} onChange={this.handleChange("email")}/>
                    </label>
                    <label className="input-box">Password: 
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")}/>
                    </label>
                    <label className="input-box">First Name: 
                        <input type="text" value={this.state.first_name} onChange={this.handleChange("first_name")}/>
                    </label>
                    <label className="input-box">Last Name: 
                        <input type="text" value={this.state.last_name} onChange={this.handleChange("last_name")}/>
                    </label>
                    <button>{this.props.formType}</button>
                </form>
                <Link to="/signin">Already have an account?</Link>
                {this.props.errors}
            </div>
        )
    }
}

export default SignUpForm;