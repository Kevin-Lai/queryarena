import React from 'react';

class QuestionForm extends React.Component{
    constructor(props){
        super(props)

        // The form should initialize state to the `question` passed in from props
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
        this.props.createQuestion(this.state).then(this.props.closeModal);
    }

    render(){
        return (
            <div className="question-form">
                <form onSubmit={this.handleSubmit()}>
                    <h1>Create Question</h1>
                    <input type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
                    <button>Create Question</button>
                </form>
            </div>
        )
    }
}

export default QuestionForm;