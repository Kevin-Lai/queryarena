import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            question: ""
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

    render(){
        if (!this.state.question){
            return null;
        }

        //debugger

        let list = this.state.question.answers.map( (answer, index) => {
                return (
                    <li className="answer-item" key={"answer #" + index}>{answer.body}</li>
                )
            }
        );

        return (
            <div className="question-index">
                <NavBarContainer />
                <div>
                    <div className="question-show-item-block">
                        <h1 className="question-show-item">{this.state.question.body}</h1>
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
export default QuestionShow;