import React from 'react';

class QuestionForm extends React.Component{
    constructor(props){
        super(props)

        // The form should initialize state to the `event` passed in from props
        this.state = this.props.question;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(type){
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleSubmit(){
        this.props.createQuestion(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit()}>
                <h1>Create Question</h1>
                <input type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
                <button>Create Question</button>
            </form>
        )
    }
}

export default QuestionForm;