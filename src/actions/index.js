import axios from "axios";

import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS, FETCH_USER_POSTS, CURRENT_USER } from "./actionTypes";

const ROOT_URL = `https://jsonplaceholder.typicode.com`;

export const fetchPosts = () => dispatch => {
    return axios.get(`${ROOT_URL}/posts`)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
};

export const fetchComments = () => dispatch => {
    return axios.get(`${ROOT_URL}/comments`)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_COMMENTS,
            payload: data
        }))
};

export const fetchUsers = () => dispatch => {
    return axios.get(`${ROOT_URL}/users`)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_USERS,
            payload: data
        }))
};

export const fetchUserPosts = id => dispatch => {
    return axios.get(`${ROOT_URL}/posts?userId=${id}`)
        .then(response => response.data)
        .then(data => dispatch({
            type: FETCH_USER_POSTS,
            payload: data
        }))
};

export const setUser = id => {
    return {
        type: CURRENT_USER,
        payload: id,
    }
}