import React from "react";
import { connect } from "react-redux";

import { fetchUserPosts, setUser } from "../actions/index";

import PostsList from "../components/postsList";
import CurrentUser from "../components/users/currentUser";

class User extends React.Component {

    componentDidMount() {
        this.props.setUser(this.props.match.params.id);
        this.props.fetchUserPosts(this.props.match.params.id);
    }

    render() {
        const { currentUser, userPosts} = this.props;
        
        if (!currentUser) return <div>Loading...</div>;

        return (
            <div className="container">
                <CurrentUser userInfo={currentUser} />
                <PostsList posts={userPosts} users={currentUser}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userPosts: state.data.userPosts || [],
    currentUser: state.data.currentUser,
})

export default connect(mapStateToProps, { fetchUserPosts, setUser })(User);