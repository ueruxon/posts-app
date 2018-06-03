import React from "react";
import { connect } from "react-redux";

import { fetchComments, setUser, fetchUserPosts, setPost, addCommentToFavorites, deleteCommentFromFavorites } from "../actions/index";

import Post from "../components/posts/post";
import CommentsList from "../components/commentsList";

class CurrentPost extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchComments();
        this.props.setPost(this.props.match.params.id);
    }

    addFavoriteComment = id => {
        this.props.addCommentToFavorites(id);
    }

    deleteFavoriteComment = id => {
        this.props.deleteCommentFromFavorites(id);
    }

    render() {
        const { comments, currentPost, postsList, users, favoritesComments } = this.props
        
        return (
            <div className="container">
                {currentPost && <Post post={currentPost} users={users} />}
                <CommentsList comments={comments} 
                    posts={postsList}
                    favoritesComments={favoritesComments}
                    addFavoriteComment={this.addFavoriteComment}
                    deleteFavoriteComment={this.deleteFavoriteComment} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    postsList: state.data.postsList || [],
    userPosts: state.data.userPosts || [],
    users: state.data.users || [],
    currentPost: state.data.currentPost,
    favoritesComments: state.data.favoritesComments || [],
    comments: state.data.commentsList.filter(comment => comment.postId === state.data.currentPost.id) || []
})

export default connect(mapStateToProps, { fetchUserPosts, setUser, fetchComments, setPost, addCommentToFavorites, deleteCommentFromFavorites })(CurrentPost);