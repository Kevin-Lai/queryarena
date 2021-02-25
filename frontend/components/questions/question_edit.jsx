import React from 'react';

class QuestionEdit extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.question;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type){
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();

        // Update the question after user presses submit
        // then, reload the page
        this.props.updateQuestion(this.state).then(this.props.closeModal).then(location.reload());
    }

    render(){
        return (
            <div className="question-form">
                <button className="question-create-x" onClick={() => this.props.closeModal()}>X</button>

                <div className="question-edit-title-block">
                    <label className="question-edit-title">Edit Question and Source</label>
                </div>

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