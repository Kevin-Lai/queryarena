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

    handleSubmit(e){
        e.preventDefault();
        this.props.createQuestion(this.state).then(this.props.closeModal);

        // this.props.createQuestion(this.state).then(
        //     (action) => {
        //         debugger
        //         return this.props.history.push("/questions/" + action.question.id)
        //     }
        // ).then(this.props.closeModal);
    }

    render(){
        return (
            <div className="question-form">
                <div className="question-create-title-block">
                    <div className="question-create-title-bar">
                        <label className="question-create-title">Add Question</label>
                        <label className="question-create-share">Share Link</label>
                    </div>
                    <button className="question-create-x" onClick={() => this.props.closeModal()}>X</button>
                </div>

                <form onSubmit={this.handleSubmit}>
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
                    <input className="question-body-input-box" placeholder={"Start your question with \"What\", \"How\", \"Why\", etc."} type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
                    <div className="question-create-buttons-block">
                        <label></label>
                        <div className="question-create-buttons">
                            <button className="question-create-cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
                            <button className="question-create-submit-button">Add Question</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default QuestionForm;