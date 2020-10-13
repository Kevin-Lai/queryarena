import React from 'react';

class UserShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUser(this.props.user.id);
    }

    // Put into render later
    // {this.props.user.firstName}
    // {this.props.user.lastName}

    render(){
        return (
            <div>
                <h1>User Show Page</h1>
            </div>
        )
    }
}
export default UserShow;