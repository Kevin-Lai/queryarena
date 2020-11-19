import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            question: "",
            answerBody: "",
            showForm: false
        }
    }

    componentDidMount(){
        //debugger
        this.props.fetchQuestion(this.props.match.params.questionId).then(
            (action) => {
                this.setState(
                    {
                        question: action.question
                    }
                )
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

    showAnswerForm(){
        this.setState({showForm: true});
    }

    handleCreateAnswer(){
        this.props.createAnswer(
            {
                body: this.state.answerBody,
                question_id: this.props.match.params.questionId
            }
        ).then(
            (action) => {
                this.setState({showForm: false});
            }
        )
    }

    handleEditAnswer(){

    }

    handleDeleteAnswer(){

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
                                <button className="question-create-cancel-button">📝 Edit</button>
                                <button className="question-create-cancel-button">❌ Delete</button>
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
                                <button className="question-create-cancel-button" onClick={()=>this.showAnswerForm()}>📝 Answer</button>
                                <button className="question-create-cancel-button">📶 Follow</button>
                                <button className="question-create-cancel-button">👤 Request</button>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.showForm ? <div className="answer-form-block">
                            <div className="answer-form">
                                <textarea className="answer-form-textarea" placeholder="Write your answer" onChange={this.handleChange("answerBody")}></textarea>                                    
                                <div className="answer-form-buttons">
                                    <div>
                                        <button className="answer-create-button" onClick={()=>this.handleCreateAnswer()}>Submit</button>
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