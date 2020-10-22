import React from 'react';

// withRouter will give you access to the history, location, params
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            query: ""
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(type){
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleKeyDown(e){
        if(e.key === "Enter"){
            this.props.history.push("/search?q="+this.state.query);
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input className="search-bar-input" type="text" placeholder="Search Query Arena" value={this.state.query} onChange={this.handleChange("query")} onKeyDown={this.handleKeyDown}/>
            </div>
        )
    }

}

export default withRouter(SearchBar);
