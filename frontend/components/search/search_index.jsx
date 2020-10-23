import React from 'react';

import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

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

        //debugger

        this.props.searchQuery(query.toLowerCase()).then(
            (action) => {
            //debugger
                this.setState({
                    results: action.results
                })
            }
        );
    }

    componentDidUpdate(prevProps){
        //debugger

        let query = this.props.location.search.split("=")[1];
        let prevQuery = prevProps.location.search.split("=")[1];

        if (query !== prevQuery){
            //debugger
            this.props.searchQuery(query.toLowerCase()).then(
                (action) => {
                //debugger
                    this.setState({
                        results: action.results
                    })
                }
            );
        }
    }

    render() {
        //debugger

        let list = this.state.results.map((question, index)=>{
            //debugger
            return(
                <li className="question-item" key={"question #" + index}>
                    <Link className="question-item-link" to={"/questions/"+question.id}>{question.body}</Link>
                    <div className="temp-space"></div>
                    <div className="question-item-buttons">
                        <button className="question-create-cancel-button">📝 Answer</button>
                        <button className="question-create-cancel-button">📶 Follow</button>
                        <button className="question-create-cancel-button">✏️ Pass</button>
                    </div>
                </li>
            )
        });

        return (
            <div className="question-index">
                <NavBarContainer />
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