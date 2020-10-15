import React from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends React.Component{
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
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(e){
        
        //debugger

        this.state = {
            email: 'guest@queryarena.com',
            password: 'password',
            first_name: "Guest",
            last_name: "User"
        };

        // After setting the current state to the guest info,
        // execute handleSubmit() to sign in the guest user
        this.handleSubmit(e);
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
                    <button>{this.props.formType}</button>
                </form>
                <Link to="/signup">Don't have an account?</Link>
                <button onClick={(e)=>this.handleDemo(e)}>Demo Login</button>
                {this.props.errors}
            </div>

        )
    }
}

export default SignInForm;