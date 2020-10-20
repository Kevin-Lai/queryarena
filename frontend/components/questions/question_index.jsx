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
        let list = this.props.questions.map((question)=>{
            return(
                <li>
                    <Link to={"/questions/"+this.props.question.id}>{this.props.question.body}</Link>
                </li>
            )
        });
        return (
            <div>
                <Link to="/questions/new">New Question</Link>
                <ul>
                    {list}
                </ul>
            </div>

        )
    }
}

export default QuestionIndex;