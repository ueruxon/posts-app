import React from "react";
import { connect } from "react-redux";

import { fetchComments } from "../actions/index";

import CommentsList from "../components/commentsList";

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className="container">
                <CommentsList comments={this.props.comments} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.data.commentsList || []
})

export default connect(mapStateToProps, { fetchComments })(Comments);