import React from 'react';

class QuestionEdit extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="question-form">
                <button className="question-create-x" onClick={() => this.props.closeModal()}>X</button>

                <form onSubmit={this.handleSubmit}>
                    <input className="question-body-input-box" placeholder={"Start your question with \"What\", \"How\", \"Why\", etc."} type="text" value={this.state.body} onChange={this.handleChange("body")}></input>
                    <div className="question-create-buttons-block">
                        <label></label>
                        <div className="question-create-buttons">
                            <button className="question-create-cancel-button" onClick={() => this.props.closeModal()}>Cancel</button>
                            <button className="question-create-submit-button">Save</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }

}

export default QuestionEdit;