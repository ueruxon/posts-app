import React from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/index";

import UsersList from "../components/users/usersList";

class Comments extends React.Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="container">
                <UsersList users={this.props.users} />
            </div>            
        )
    }
}

const mapStateToProps = state => ({
    users: state.data.users || []
})

export default connect(mapStateToProps, { fetchUsers })(Comments);