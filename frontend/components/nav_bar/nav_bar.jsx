import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/search_bar';
import UserProfileImage from "../../../app/assets/images/user_profile.png"
import GitHubIcon from "../../../app/assets/images/github.png"
import LinkedInIcon from "../../../app/assets/images/linkedin.png"

class NavBar extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
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
                    <Link className="title-nav-button" to="/">Query Arena</Link>
                    <Link className="home-nav-button" to="/">🏠 Home</Link>
                    <button className="nav-button-unused">📰 Following</button>
                    <Link className="home-nav-button" to="/">📝 Answer</Link>
                    <button className="nav-button-unused">👪 Spaces</button>
                    <button className="nav-button-unused">🔔 Notifications</button>
                    <button className="about">ℹ️ About
                        <div className="about-dropdown">
                            <a href="https://www.linkedin.com/in/kevinlai247" className="about-dropdown-link" target="_blank">
                                <img src={LinkedInIcon}/>
                            </a>
                            <a href="https://github.com/Kevin-Lai" className="about-dropdown-link" target="_blank">
                                <img src={GitHubIcon}/>
                            </a>
                        </div>
                    </button>
                    <SearchBar />
                    <Link className="user-profile-img" to={"/users/"+this.props.currentUserId}>
                        <img src={UserProfileImage} />
                    </Link>
                    <div className="add-question-nav-button-block">
                        <button className="add-question-nav-button" onClick={() => this.props.openModal({formType: 'Add Question'})}>Add Question</button>
                    </div>
                    <button className="nav-button" onClick={()=>this.handleClick()}>Sign Out</button>
                </nav>
            </div>
        )
    }
}
export default NavBar;