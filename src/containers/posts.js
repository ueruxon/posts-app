import React, { Fragment }from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/index";

import PostsList from "../components/postsList";

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <Fragment>
                <PostsList posts={this.props.posts} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.data.postsList || []
})

export default connect(mapStateToProps, { fetchPosts })(Posts);