import React from "react";

const List = ({ comments }) => {
    const items = comments.map(item => (
        <li className="card card-cont card-comment bg-light" key={item.id}>
            <div className="card-header">
                <h6 className="text-muted">Post: {item.postId}</h6>
                <h6 className="text-muted">Author: {item.email}</h6>
            </div>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.body}</p>
            </div>
        </li>
    ))

    return (
        <ul className="cards">
            {items}
        </ul>
    )
}

export default List;