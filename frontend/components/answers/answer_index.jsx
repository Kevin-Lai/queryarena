import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    render(){

        if(!this.props.user) return null;

        let questionIds = new Set(this.props.user.answers.map((answer)=>answer.question_id));

        let filteredList = this.props.questions.filter((question)=> !questionIds.has(question.id));

        let list = filteredList.map((question, index)=>{

            let numberOfAnswers = question.answers ? question.answers.length : 0;

            return(
                <li className="question-item" key={"question #" + index}>
                    <Link className="question-item-link" to={"/questions/"+question.id}>{question.body}</Link>
                    <div className="temp-space"></div>
                    <div className="question-item-buttons">
                        <Link className="question-item-link" to={"/questions/"+question.id}>{numberOfAnswers === 1 ? numberOfAnswers+" Answer": numberOfAnswers+" Answers"}</Link>
                    </div>
                </li>
            )
        });

        return (
            <div className="question-index">
                <div className="question-index-main-block">
                    <div className="create-question-index-block">
                        <h2 className="question-search-title">
                            <label className="question-search-query">Questions for you</label>
                        </h2>
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

export default AnswerIndex;