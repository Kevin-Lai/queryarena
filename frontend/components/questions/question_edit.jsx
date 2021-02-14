import React from 'react';

class QuestionEdit extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="question-form">
                <button className="question-create-x" onClick={() => this.props.closeModal()}>X</button>
            </div>
        )
    }

}

export default QuestionEdit;