import React from 'react';
// import { Link } from 'react-router-dom';

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
            <div className="session-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="session-title">{this.props.formType}</h2>
                    <div className="name-labels">
                        <label className="first-name-label">FIRST NAME</label>
                        <label className="last-name-label">LAST NAME</label>
                    </div>
                    <input type="text" className="first-name-input-box" value={this.state.first_name} onChange={this.handleChange("first_name")}/>
                    <input type="text" className="last-name-input-box" value={this.state.last_name} onChange={this.handleChange("last_name")}/>
                    <label className="input-label">EMAIL</label>
                    <input type="email" className="input-box" value={this.state.email} onChange={this.handleChange("email")}/>
                    <label className="input-label">PASSWORD</label>
                    <input type="password" className="input-box" value={this.state.password} onChange={this.handleChange("password")}/>
                    <button className="submit-button">{this.props.formType}</button>
                </form>
                {/* <Link to="/signin">Already have an account?</Link> */}
                {/* <div>{this.props.errors}</div> */}
            </div>
        )
    }
}

export default SignUpForm;