import React from "react";
import { Link } from "react-router-dom";

const List = ({ posts, users, addFavoritePost, favoritesPosts, deleteFavoritePost }) => {
    const favoritesItems = posts.filter(post => favoritesPosts.find(item => item.id === post.id));
    const noFavoritesItems = posts.filter(post => !favoritesPosts.find(item => item.id === post.id));

    const noFavoritesList = noFavoritesItems.map(post => {
        const author = Array.isArray(users) ? users.find(user => user.id === post.userId) : users.username;

        return (
            <li className="card card-cont bg-light" key={post.id}>
                <div className="card-header">Author: <Link to={`/user/${post.userId}`}>{author.username || author}</Link></div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
                <div className="card-footer card-display">
                    <Link className="btn btn-primary" to={`/post/${post.id}`}>Read post</Link>
                    <div className='favorite' onClick={() => addFavoritePost(post.id)}>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </li>
        )
    })

    const favoritesList = favoritesItems.map(post => {
        const author = Array.isArray(users) ? users.find(user => user.id === post.userId) : users.username;

        return (
            <li className="card card-cont bg-light" key={post.id}>
                <div className="card-header">Author: <Link to={`/user/${post.userId}`}>{author.username || author}</Link></div>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
                <div className="card-footer card-display">
                    <Link className="btn btn-primary" to={`/post/${post.id}`}>Read post</Link>
                    <div className='favorite added' onClick={() => deleteFavoritePost(post.id)}>
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </li>
        )
    })

    return (
        <ul className="cards">
            {favoritesList}
            {noFavoritesList}
        </ul>
    )
}

export default List;