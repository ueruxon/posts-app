import React from "react";
import _ from "lodash";

const List = ({ posts, users }) => {
    

    const items = posts.map(post => {
        const author = Array.isArray(users) ? users.find(user => user.id === post.userId) : users.name;
        
        return (
            <li className="card card-cont bg-light" key={post.id}>
                <div className="card-header">Author: {author.name || author}</div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
            </li>
        )
    });

    return (
        <ul className="cards">
            {items}
        </ul>
    )
}

export default List;