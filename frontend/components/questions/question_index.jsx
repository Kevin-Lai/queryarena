import React from 'react';
import { Link } from 'react-router-dom';

class QuestionIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    render(){
        let list = this.props.questions.map((question, index)=>{

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
                        <button className="create-question-button" onClick={() => this.props.openModal({formType: 'Add Question', user:this.props.user})}>What is your question or link?</button>
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

export default QuestionIndex;