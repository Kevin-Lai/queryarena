import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            question: "",
            answerBody: "",
            currentUserAnswerId: "",
            showForm: false,
            formType: ""
        }
    }

    componentDidMount(){
        //debugger
        this.handleAnswers();
    }

    handleAnswers(){
        this.props.fetchQuestion(this.props.match.params.questionId).then(
            (action) => {
                let userAnswer = action.question.answers.find( (answer) => answer.user_id === this.props.currentUserId )
                //debugger
                this.setState(
                    {
                        question: action.question,
                        currentUserAnswerId: userAnswer ? userAnswer.id : ""
                    }
                );
            }
        );
    }

    handleChange(type){
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    showAnswerForm(formType){
        this.setState(
            {
                showForm: true,
                formType: formType
            }
        );
    }

    handleCreateAnswer(){
        // TODO: createAnswer, updateAnswer and deleteAnswer require a page refresh to show the new answer
        this.props.createAnswer(
            {
                body: this.state.answerBody,
                question_id: this.props.match.params.questionId
            }
        ).then(
            (action) => {
                this.setState({showForm: false});
                this.handleAnswers();
            }
        )
    }

    handleEditAnswer(){
        this.props.updateAnswer(
            {
                body: this.state.answerBody,
                id: this.state.currentUserAnswerId
            }
        ).then(
            (action) => {
                this.setState({showForm: false});
                this.handleAnswers();
            }
        );
    }

    handleDeleteAnswer(){
        this.props.deleteAnswer(this.state.currentUserAnswerId).then(
            (action) => {
                this.setState({currentUserAnswerId: ""});
                this.handleAnswers();
            }
        )
    }

    handleSubmit(){
        if(this.state.formType === "Create Answer"){
            this.handleCreateAnswer();
        }
        else if(this.state.formType === "Update Answer"){
            this.handleEditAnswer();
        }
    }

    render(){
        if (!this.state.question){
            return null;
        }

        //debugger

        let list = this.state.question.answers.map( (answer, index) => {
                return (
                    <li className="answer-item" key={"answer #" + index}>
                        {answer.body}
                        {
                            answer.user_id === this.props.currentUserId ? <div>
                                <button className="question-create-cancel-button" onClick={()=>this.showAnswerForm("Update Answer")}>📝 Edit</button>
                                <button className="question-create-cancel-button" onClick={()=>this.handleDeleteAnswer()}>❌ Delete</button>
                            </div> : ""
                        }
                    </li>
                )
            }
        );

        return (
            <div className="question-index">
                <NavBarContainer />
                <div>
                    <div className="question-show-item-block">
                        <div className="question-item">
                            <h1 className="question-show-item">{this.state.question.body}</h1>
                            <div className="temp-space"></div>
                            <div className="question-item-buttons">
                                <button className="question-create-cancel-button" onClick={()=>this.showAnswerForm("Create Answer")}>📝 Answer</button>
                                <button className="question-create-cancel-button">📶 Follow</button>
                                <button className="question-create-cancel-button">👤 Request</button>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.showForm ? <div className="answer-form-block">
                            <div className="answer-form">
                                <textarea className="answer-form-textarea" placeholder="Write your answer" value={this.state.answerBody} onChange={this.handleChange("answerBody")}></textarea>                                    
                                <div className="answer-form-buttons">
                                    <div>
                                        <button className="answer-create-button" onClick={()=>this.handleSubmit()}>Submit</button>
                                        <button>Save Draft</button>
                                    </div>
                                    <button>...</button>
                                </div>
                            </div>
                        </div> : ""
                    }
                    <div className="question-items-list-block">
                        <ul className="question-items-list">
                            {list}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuestionShow;