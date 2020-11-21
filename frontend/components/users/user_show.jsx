import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        //debugger

        // prior to fetching the user, the user did not exist in the state.entities.user slice of state.
        this.props.fetchUser(this.props.currentUserId);
    }

    handleClick(){
        this.props.signOut().then( () =>
            this.props.history.push("/")
        );
    }

    render(){
        // don't render until user has been fetched
        if (!this.props.user){
            return null;
        }

        return (
            <div className="question-index">
                <h1>{"Welcome " + this.props.user.first_name + " " + this.props.user.last_name + "!"}</h1>
                <button onClick={()=>this.handleClick()}>Sign Out</button>
            </div>
        )
    }
}
export default UserShow;