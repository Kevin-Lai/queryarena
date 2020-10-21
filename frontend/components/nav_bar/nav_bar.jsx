import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
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
            <div className="nav-bar-block">
                <nav className="nav-bar-buttons">
                    <Link className="nav-button" to="/">Query Arena</Link>
                    <Link className="nav-button" to="/">Home</Link>
                    <button className="nav-button">Following</button>
                    <button className="nav-button">Answer</button>
                    <button className="nav-button">Spaces</button>
                    <button className="nav-button">Notifications</button>
                    <button className="nav-button" onClick={() => this.props.openModal('Add Question')}>Add Question</button>
                    <button className="nav-button" onClick={()=>this.handleClick()}>Sign Out</button>
                </nav>
            </div>
        )
    }
}
export default NavBar;