import React from 'react';
// import { Link } from 'react-router-dom';

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
                // return this.props.history.push("/users/" + action.currentUser.id)
                return this.props.history.push("/")
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
            <div className="session-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="session-title">{this.props.formType}</h2>
                    <label className="login-input-box">
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange("email")}/>
                    </label>
                    <label className="login-password-box">
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange("password")}/>
                    </label>
                    <div className="login-submit-block">
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                        <button className="submit-button">{this.props.formType}</button>
                    </div>
                </form>
                {/* <Link to="/signup">Don't have an account?</Link> */}
                <button className="demo-login-button" onClick={(e)=>this.handleDemo(e)}>Demo Login</button>
                {/* <div>{this.props.errors}</div> */}
            </div>

        )
    }
}

export default SignInForm;