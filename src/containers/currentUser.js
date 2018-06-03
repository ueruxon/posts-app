import React from "react";
import { connect } from "react-redux";

import { fetchUserPosts, setUser, addPostToFavorites, deletePostFromFavorites } from "../actions/index";

import PostsList from "../components/postsList";
import CurrentUser from "../components/users/currentUser";

class User extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.setUser(this.props.match.params.id);
        this.props.fetchUserPosts(this.props.match.params.id);
    }

    addFavoritePost = id => {
        this.props.addPostToFavorites(id);
    }

    deleteFavoritePost = id => {
        this.props.deletePostFromFavorites(id);
    }

    render() {
        const { currentUser, userPosts, favoritesPosts } = this.props;
        
        if (!currentUser) return <div>Loading...</div>;

        return (
            <div className="container">
                <CurrentUser userInfo={currentUser} />
                <PostsList posts={userPosts} 
                    users={currentUser} 
                    addFavoritePost={this.addFavoritePost}
                    favoritesPosts={favoritesPosts}
                    deleteFavoritePost={this.deleteFavoritePost} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userPosts: state.data.userPosts || [],
    currentUser: state.data.currentUser,
    favoritesPosts: state.data.favoritesPosts || []
})

export default connect(mapStateToProps, { fetchUserPosts, setUser, addPostToFavorites, deletePostFromFavorites })(User);