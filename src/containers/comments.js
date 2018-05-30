import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchComments } from "../actions/index";

import CommentsList from "../components/commentsList";

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <Fragment>
                <CommentsList comments={this.props.comments} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    comments: state.data.commentsList || []
})

export default connect(mapStateToProps, { fetchComments })(Comments);