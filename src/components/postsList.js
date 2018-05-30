import React from "react";

const List = ({ posts }) => {
    const items = posts.map(item => (
            <li className="card card-cont" key={item.id}>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {item.userId}</h6>
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