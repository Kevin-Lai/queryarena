import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //debugger
        this.props.fetchQuestion(this.props.match.params.questionId);
    }

    render(){
        if (!this.props.question){
            return null;
        }

        return (
            <div>
                <NavBarContainer history={this.props.history}/>
                <h1>{this.props.question.body}</h1>
            </div>
        )
    }
}
export default QuestionShow;