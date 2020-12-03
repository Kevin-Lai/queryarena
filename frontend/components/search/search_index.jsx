import React from 'react';
import { Link } from 'react-router-dom';

class SearchIndex extends React.Component{
    constructor(props){
        super(props);

        // This will return [search: "?q=hi"]
        // this.props.location.search

        this.state = {
            results: []
        }
    }

    componentDidMount(){
        let query = this.props.location.search.split("=")[1];

        this.props.searchQuery(query.toLowerCase()).then(
            (action) => {
                this.setState({
                    results: action.results
                })
            }
        );
    }

    componentDidUpdate(prevProps){
        let query = this.props.location.search.split("=")[1];
        let prevQuery = prevProps.location.search.split("=")[1];

        if (query !== prevQuery){
            this.props.searchQuery(query.toLowerCase()).then(
                (action) => {
                    this.setState({
                        results: action.results
                    })
                }
            );
        }
    }

    render() {
        let list = this.state.results.map((question, index)=>{
            return(
                <li className="question-item" key={"question #" + index}>
                    <Link className="question-item-link" to={"/questions/"+question.id}>{question.body}</Link>
                    <div className="temp-space"></div>
                    <div className="question-item-buttons">
                        <Link className="question-item-link" to={"/questions/"+question.id}>{question.answers ? question.answers.length : 0} Answers</Link>
                    </div>
                </li>
            )
        });

        return (
            <div className="question-index">
                <div className="question-index-main-block">
                    <div className="create-question-index-block">
                        <h2 className="question-search-title">Results for
                            <label className="question-search-query"> {" " + this.props.location.search.split("=")[1]} </label>
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

export default SearchIndex;