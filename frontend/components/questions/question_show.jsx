import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchQuestion(this.props.question.id);
    }

    render(){
        return (
            <div>
                <h1>Question</h1>
            </div>
        )
    }
}
export default QuestionShow;