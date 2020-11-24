import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userQuestions: ""
        }

    }

    componentDidMount(){
        //debugger

        // prior to fetching the user, the user did not exist in the state.entities.user slice of state.
        this.props.fetchUser(this.props.currentUserId);
        this.props.fetchQuestions().then(
            (action) => {
                //debugger
                let userQuestions = action.questions.filter(question => question.user_id === this.props.currentUserId);
                this.setState({userQuestions: userQuestions});
            }
        );
    }

    render(){
        // don't render until user has been fetched
        if (!this.props.user){
            return null;
        }

        //debugger

        // In case the user has not created any questions
        let list = this.state.userQuestions ? this.state.userQuestions.map((question, index)=>{
        // let list = this.props.user.questions.map((question, index)=>{
            //debugger
            return(
                <li className="question-item" key={"question #" + index}>
                    <Link className="question-item-link" to={"/questions/"+question.id}>{question.body}</Link>
                    <div className="temp-space"></div>
                    <div className="question-item-buttons">
                        <Link className="question-item-link" to={"/questions/"+question.id}>{question.answers ? question.answers.length : 0} Answers</Link>
                    </div>
                </li>
            )
        }) : "";

        return (
            <div className="question-index">
                <div className="question-index-main-block">
                    <div className="create-question-index-block">
                        <h1>{"Welcome " + this.props.user.first_name + " " + this.props.user.last_name + "!"}</h1>
                    </div>
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
export default UserShow;