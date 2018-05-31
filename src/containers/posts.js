import React from "react";
import { connect } from "react-redux";

import { fetchPosts, fetchUsers } from "../actions/index";

import PostsList from "../components/postsList";

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
    }

    render() {
        const {users, posts} = this.props;

        if (users.length === 0 || !posts) return <div>Loading...</div>;
        
        return (
            <div className="container">
                <PostsList posts={posts} users={users} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.data.postsList || [],
    users: state.data.users || []
})

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(Posts);