import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/index";

import CommentsList from "../components/commentsList";

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <Fragment>
                <div>Blala</div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.data.users || []
})

export default connect(mapStateToProps, { fetchUsers })(Comments);