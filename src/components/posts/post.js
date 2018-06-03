import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post, users }) => {
    const user = users.find(user => user.id === post.userId);

    return (
        <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <p className="card-text">
                        <small className="text-muted">Author: <Link to={`/user/${user.id}`}>{user.username}</Link>
                        </small>
                    </p>
                </div>
        </div>
    )
}

export default Post;