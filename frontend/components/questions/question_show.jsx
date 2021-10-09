import React from 'react';

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

        this.handleAnswers = this.handleAnswers.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCreateAnswer = this.handleCreateAnswer.bind(this);
        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this);
        this.handleEditAnswer = this.handleEditAnswer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showAnswerForm = this.showAnswerForm.bind(this);
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
        this.addUpvote = this.addUpvote.bind(this);
        this.removeUpvote = this.removeUpvote.bind(this);
    }

    componentDidMount(){
        this.handleAnswers();
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.questionId !== prevProps.match.params.questionId){
            this.handleAnswers();
        }
    }

    handleDeleteQuestion(){
        // Only show option to delete for the Question's author
        // No one else is allowed to delete the question
        this.props.deleteQuestion(this.props.match.params.questionId).then(
            () => {
                // After deleting question, redirect to Question Index page
                this.props.history.push("/");
            }
        )
    }

    handleAnswers(){
        this.props.fetchQuestion(this.props.match.params.questionId).then(
            (action) => {
                let userAnswer = action.question.answers.find( (answer) => answer.user_id === this.props.currentUserId )

                this.setState(
                    {
                        question: action.question,
                        currentUserAnswerId: userAnswer ? userAnswer.id : "",
                        answerBody: userAnswer ? userAnswer.body : ""
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

        if(formType === "Create Answer" && this.state.currentUserAnswerId){
            formType = "Update Answer";
        }

        this.setState(
            {
                showForm: !this.state.showForm,
                formType: formType
            }
        );
    }

    handleCreateAnswer(){
        this.props.createAnswer(
            {
                body: this.state.answerBody,
                question_id: this.props.match.params.questionId
            }
        ).then(
            () => {
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
            () => {
                this.setState({showForm: false});
                this.handleAnswers();
            }
        );
    }

    handleDeleteAnswer(){
        this.props.deleteAnswer(this.state.currentUserAnswerId).then(
            () => {
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

    addUpvote(answerId){

        let upvote = {
            answer_id: answerId
        };

        //debugger

        this.props.createUpvote(upvote);
        this.handleAnswers();
    }

    removeUpvote(upvotes){

        //debugger

        if(upvotes){
            let upvoteId = 0;

            for(let i = 0; i<upvotes.length; i++){
                if(upvotes[i].user_id === this.props.currentUserId){
                    upvoteId = upvotes[i].id;
                    break;
                }
            }
    
            this.props.deleteUpvote(upvoteId);
            this.handleAnswers();
        }
    }

    render(){
        if (!this.state.question){
            return null;
        }

        // Answers with more upvotes will appear at the top of the list.
        // Sort according to most upvotes.
        let list = this.state.question.answers.sort((a,b)=>b.upvotes.length-a.upvotes.length).map( (answer, index) => {
                //debugger
                return (
                    <li className="answer-item" key={"answer #" + index}>
                        {answer.body}
                        <div className="temp-space"></div>
                        <div className="answer-buttons">
                            <button className="question-create-cancel-button" onClick={()=>this.addUpvote(answer.id)}>⬆️ {answer.upvotes ? answer.upvotes.length : 0}</button>
                            <button className="question-create-cancel-button" onClick={()=>this.removeUpvote(answer.upvotes)}>⬇️</button>
                            {
                                answer.user_id === this.props.currentUserId ? <div>
                                    <button className="question-create-cancel-button" onClick={()=>this.showAnswerForm("Update Answer")}>📝 Edit</button>
                                    <button className="question-create-cancel-button" onClick={()=>this.handleDeleteAnswer()}>❌ Delete</button>
                                </div> : ""
                            }
                        </div>
                    </li>
                )
            }
        );

        return (
            <div className="question-index">
                <div>
                    <div className="question-show-item-block">
                        <div className="question-item">
                            <h1 className="question-show-item">{this.state.question.body}</h1>
                            <div className="temp-space"></div>
                            <div className="question-item-buttons">
                                <button className="question-create-cancel-button" onClick={()=>this.showAnswerForm("Create Answer")}>💬 Answer</button>
                                <button className="question-create-cancel-button-unused">📶 Follow</button>
                                {
                                    this.state.question.user_id === this.props.currentUserId ? 
                                        <div>
                                            <button className="question-create-cancel-button" onClick={() => this.props.openModal({formType: 'Edit Question', question: this.state.question})}>📝 Edit</button>
                                            <button className="question-create-cancel-button" onClick={()=>this.handleDeleteQuestion()}>❌ Delete</button>
                                        </div>
                                        : ""
                                }
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
                                        <button className="answer-button-unused">Save Draft</button>
                                    </div>
                                    <button className="answer-button-unused">...</button>
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