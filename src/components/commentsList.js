import React from "react";
import { Link } from "react-router-dom";

const List = ({ comments, posts, favoritesComments, addFavoriteComment, deleteFavoriteComment }) => {
    const favoritesItems = comments.filter(comment => favoritesComments.find(item => item.id === comment.id));
    const noFavoritesItems = comments.filter(comment => !favoritesComments.find(item => item.id === comment.id));

    const noFavoritesList = noFavoritesItems.map(comment => {
        const post = posts.find(post => post.id === comment.postId);

        return ( 
            <li className="card card-cont card-comment text-white bg-secondary mb-3" key={comment.id}>
                <div className="card-header">
                    <h6 className="">Post: <Link className="text-warning" to={`/post/${post.id}`}>{post.title}</Link></h6>
                    <h6 className="">Author: {comment.email}</h6>
                    <div className="favorite-comment" onClick={() => addFavoriteComment(comment.id)}>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{comment.name}</h5>
                    <p className="card-text">{comment.body}</p>
                </div>
            </li>
        )
    })

    const favoritesList = favoritesItems.map(comment => {
        const post = posts.find(post => post.id === comment.postId);

        return (
            <li className="card card-cont card-comment text-white bg-secondary mb-3" key={comment.id}>
                <div className="card-header">
                    <h6 className="">Post: <Link className="text-warning" to={`/post/${post.id}`}>{post.title}</Link></h6>
                    <h6 className="">Author: {comment.email}</h6>
                    <div className="favorite-comment added" onClick={() => deleteFavoriteComment(comment.id)}>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{comment.name}</h5>
                    <p className="card-text">{comment.body}</p>
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