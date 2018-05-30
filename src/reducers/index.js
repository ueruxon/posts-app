import { combineReducers } from 'redux';
import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS } from "../actions/actionTypes";

const initialState = {
    postsList: [],
    commentsList: [],
    users: []
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
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    data: postsReducer
});

export default rootReducer;