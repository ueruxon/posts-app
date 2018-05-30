import React from "react";

const List = ({ comments }) => {
    const items = comments.map(item => (
        <li className="card card-cont card-comment" key={item.id}>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Post: {item.postId}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Author: {item.email}</h6>
                <p className="card-text">{item.body}</p>
            </div>
        </li>
    ))

    return (
        <div className="container">
            <ul className="cards">
                {items}
            </ul>
        </div>
    )
}

export default List;