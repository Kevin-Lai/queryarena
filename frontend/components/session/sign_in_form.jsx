import React from 'react';

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
		this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        this.props.clearErrors();
    }

    handleSubmit(e){
		e.preventDefault();
		this.handleLogin();
    }

	handleLogin(){
	    this.props.submitEvent(this.state).then( (action) => {
                return this.props.history.push("/")
            }
        );
	}

    handleChange(fieldType){
        return event => {
            this.setState({
                [fieldType]: event.currentTarget.value
            });
        }
    }

    handleDemo(e){
        e.preventDefault();

        const demoUser = {
            email: 'guest@queryarena.com',
            password: 'password'
        };

		// speed in milliseconds for each char
		const loginAnimationSpeed = 120;

		// nested function to have access to the demoUser obj
        const animatePassword = ()=>{

            let passwordAnimationInterval = setInterval( ()=>{
				// if the password has not yet reached the max length, then continue the animation interval
                if(this.state.password !== demoUser.password) {
                    // update the password after each char is added
                    let passwordText = demoUser.password.slice(0, this.state.password.length + 1);
					
					// set the password state to the current password text
                    this.setState({
                        password: passwordText
                    });
                }
                else{
                    // stop the animation once it matches
                    clearInterval(passwordAnimationInterval);
                    
                    // After setting the current state to the guest info,
                    // execute handleLogin() to sign in the guest user
                    this.handleLogin();
                }
            }, loginAnimationSpeed);
        }
		
		// keep running the animation until both the email and the password matches the demo user
        let emailAnimationInterval = setInterval(()=>{
            // if the email has not yet reached the max length, then continue the animation interval
			if(this.state.email !== demoUser.email){
                // update the email after each char is added
                let emailText = demoUser.email.slice(0, this.state.email.length + 1);

				// set the password state to the current email text
                this.setState({
                    email: emailText 
                });
            }
            else{
                // stop the animation once it matches
                clearInterval(emailAnimationInterval);

                // once the email address animation has finished, begin the password animation
                animatePassword();
            }
        }, loginAnimationSpeed)
    }

    render(){
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
                <button className="demo-login-button" onClick={(e)=>this.handleDemo(e)}>Demo Login</button>
            </div>
        )
    }
}

export default SignInForm;