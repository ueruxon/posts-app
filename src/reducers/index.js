import { combineReducers } from 'redux';
import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS, FETCH_USER_POSTS, CURRENT_USER } from "../actions/actionTypes";

const initialState = {
    postsList: [],
    commentsList: [],
    users: [],
    userPosts: null,
    currentUser: null,
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
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    data: postsReducer
});

export default rootReducer;