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
                    <h1>Add Question</h1>
                    <div>
                        <div className="question-guidelines">
                            <label className="question-guidelines-label">Tips on getting good answers quickly</label>
                            <ul className="question-guidelines-list">
                                <li>Make sure your question has not been asked already</li>
                                <li>Keep your question short and to the point</li>
                                <li>Double-check grammar and spelling</li>
                            </ul>
                        </div>
                    </div>
                    <input type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
                    <div>
                        <button onClick={() => this.props.closeModal()}>Cancel</button>
                        <button>Add Question</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default QuestionForm;