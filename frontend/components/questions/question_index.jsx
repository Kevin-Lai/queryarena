import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    render(){
        let list = this.props.questions.map((question)=>{
            return(
                <li>
                    <Link to={"/questions/"+this.props.question.id}>{this.props.question.body}</Link>
                </li>
            )
        });
        //debugger
        return (
            <div className="question-index">
                <NavBarContainer history={this.props.history}/>
                <div className="create-question-index-block">
                    <button className="create-question-button" onClick={() => this.props.openModal('Add Question')}>Add Question</button>
                </div>
                <ul>
                    {list}
                </ul>
            </div>

        )
    }
}

export default QuestionIndex;