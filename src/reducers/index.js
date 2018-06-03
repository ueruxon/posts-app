import { combineReducers } from 'redux';
import { FETCH_COMMENTS, 
    FETCH_POSTS, 
    FETCH_USERS, 
    FETCH_USER_POSTS, 
    CURRENT_USER,
    CURRENT_POST,
    ADD_COMMENT_TO_FAVORITES,
    ADD_POST_TO_FAVORITES, 
    DELETE_POST_FROM_FAVORITES, 
    DELETE_COMMENT_FROM_FAVORITES } from "../actions/actionTypes";

const initialState = {
    postsList: [],
    commentsList: [],
    users: [],
    favoritesPosts: [],
    favoritesComments: [],
    userPosts: null,
    currentUser: null,
    currentPost: null,
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS: 
            return {
                ...state,
                postsList: action.payload
            }
        case FETCH_COMMENTS: 
            return {
                ...state,
                commentsList: action.payload
            }    
        case FETCH_USERS: 
            return {
                ...state,
                users: action.payload
            } 
        case FETCH_USER_POSTS: 
            return {
                ...state,
                userPosts: action.payload
            } 
        case CURRENT_USER: 
            return {
                ...state,
                currentUser: state.users.find(user => +user.id === +action.payload)
            }
        case CURRENT_POST: 
            return {
                ...state,
                currentPost: state.postsList.find(post => +post.id === +action.payload)
            }
        case ADD_POST_TO_FAVORITES: 
            const post = state.postsList.find(post => post.id === action.payload);

            if (state.favoritesPosts.includes(post)) return state;

            return {
                ...state,
                favoritesPosts: [post, ...state.favoritesPosts]
            }
        case DELETE_POST_FROM_FAVORITES: 
            return {
                ...state,
                favoritesPosts: state.favoritesPosts.filter(post => post.id !== action.payload)
            } 
        case ADD_COMMENT_TO_FAVORITES: 
            const comment = state.commentsList.find(comment => comment.id === action.payload);

            if (state.favoritesComments.includes(comment)) return state;

            return {
                ...state,
                favoritesComments: [comment , ...state.favoritesComments]
            }
        case DELETE_COMMENT_FROM_FAVORITES: 
            return {
                ...state,
                favoritesComments: state.favoritesComments.filter(comment => comment.id !== action.payload)
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    data: postsReducer
});

export default rootReducer;