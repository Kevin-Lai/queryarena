import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileImage from "../../../app/assets/images/user_profile.png"

class UserShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userQuestions: "",
            selectedOption: 0
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount(){
        // prior to fetching the user, the user did not exist in the state.entities.user slice of state.
        this.props.fetchUser(this.props.currentUserId);
        this.props.fetchQuestions().then(
            (action) => {
                let userQuestions = action.questions.filter(question => question.user_id === this.props.currentUserId);
                this.setState({userQuestions: userQuestions});
            }
        );
    }

    handleOnClick(optionNumber){
        this.setState({selectedOption: optionNumber});
    }

    render(){
        // don't render until user has been fetched
        if (!this.props.user){
            return null;
        }

        // In case the user has not created any questions
        let questionsList = this.state.userQuestions ? this.state.userQuestions.map((question, index)=>{

            let numberOfAnswers = question.answers ? question.answers.length : 0;

            return(
                <li className="user-questions-item" key={"question #" + index}>
                    <Link className="question-item-link" to={"/questions/"+question.id}>{question.body}</Link>
                    <div className="temp-space"></div>
                    <div className="question-item-buttons">
                        <Link className="question-item-link" to={"/questions/"+question.id}>{numberOfAnswers === 1 ? numberOfAnswers+" Answer": numberOfAnswers+" Answers"}</Link>
                    </div>
                </li>
            )
        }) : "";

        let totalUserQuestions = this.props.user.questions ? this.props.user.questions.length : 0;
        let totalUserAnswers = this.props.user.answers ? this.props.user.answers.length : 0;

        let answersList = this.props.user.answers ? this.props.user.answers.map((answer, index)=>{
            return (
                <li className="answer-item" key={"answer #" + index}>
                    <Link className="question-item-link" to={"/questions/"+answer.question_id}>{answer.body}</Link>
                </li>
            )
        }) : "";

        let selectedList;

        switch(this.state.selectedOption){
            case 1:
                selectedList = answersList;
                break;
            default:
                selectedList = questionsList;
        }

        return (
            <div>
                <div className="user-info-block">
                    <img className="user-show-profile-img" src={UserProfileImage} />
                    <h1 className="user-profile-name">{this.props.user.first_name + " " + this.props.user.last_name}</h1>
                </div>
                <div className="user-info-block">
                    <div className="user-questions-number-block">
                        <button className="user-questions-number" onClick={()=>this.handleOnClick(0)}>
                            {totalUserQuestions === 1 ? totalUserQuestions+" Question" : totalUserQuestions+" Questions"}
                        </button>
                        <label className="user-questions-number">|</label>
                        <button className="user-questions-number" onClick={()=>this.handleOnClick(1)}>
                            {totalUserAnswers === 1 ? totalUserAnswers+" Answer" : totalUserAnswers+" Answers"}
                        </button>
                    </div>
                </div>
                <div className="user-questions-block">
                    <ul className="user-questions-list">
                        {selectedList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserShow;