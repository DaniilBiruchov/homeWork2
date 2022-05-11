import { postsApi } from "../API/axiosApi"

export const ADD_POSTS = 'ADD_POSTS'
export const ADD_CURRENT_POST = 'ADD_CURRENT_POST'
export const ADD_COMMENTS_POST = 'ADD_COMMENTS_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENTS = 'ADD_COMMENTS'


const defaultState = {
    posts: [],
    currentPost: {},
    comments: []
}

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        }

        case ADD_CURRENT_POST: {
            return {
                ...state,
                currentPost: {...action.payload}
            }
        }
        
        case ADD_COMMENTS_POST: {
            return {
                ...state,
                currentPost: {...state.currentPost, comments: [...action.payload]}
            }
        }

        case ADD_POST: {
            return {
                ...state,
                posts: [ ...action.payload, ...state.posts]
            }
        }

        case UPDATE_POST: {
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload.id) {
                        return {...post, title: action.payload.title}
                    } else {
                        return post
                    }
                })
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => {
                    if (post.id !== action.payload.id) {
                        return {}
                    } else {
                        return post
                    }
                })
            }
        }

        case ADD_COMMENTS: {
            return {
                ...state,
                comments: [ ...action.payload, ...state.comments]
            }
        }

        default: 
            return state
    }
}

export const addPostsAC = (payload) => ({type: ADD_POSTS, payload})
export const getCurrentPostAC = (payload) => ({type:ADD_CURRENT_POST, payload})
export const getCommentsAC = (payload) => ({type:ADD_COMMENTS_POST, payload})
export const addPostAC = (payload) => ({type:ADD_POST, payload})
export const updatePostAC = (payload) => ({type:UPDATE_POST, payload})
export const deletePostAC = (payload) => [{type: DELETE_POST, payload}]
export const addCommentsAC = (payload) => ({type: ADD_COMMENTS, payload})


export const getPostsThunk = () => (dispatch) => {
    postsApi.getPosts()
    .then(response => {
        dispatch(addPostsAC(response.data))
    })
}

export const getCurrentPostThunk = (id) => (dispatch) => {
    postsApi.getPostByID(id)
    .then (response => {
        dispatch(getCurrentPostAC(response.data))
    })
}

export const getCommentsPostThunk = (id) => (dispatch) => {
    postsApi.getCommentsByPostId(id)
    .then (response => {
        console.log(response.data);
        dispatch(getCommentsAC(response.data))
    })
}

export const addPostThunk = (post) => (dispatch) => {
    postsApi.addPost(post)
    .then(response => {
        dispatch(addPostAC(response.data))
    })
}

export const updatePostThunk = (id, post) => (dispatch) => {
    postsApi.updatePost(id, post)
    .then(response => {
        dispatch(updatePostAC(response.data.post))
    })
}

export const deletePostThunk = (id) => (dispatch) => {
    postsApi.deletePost(id)
    .then (response => {
        dispatch(deletePostAC(response.data))
    })
}

export const addCommentsThunk = () => (dispatch) => {
    postsApi.addComments()
    .then(response => {
        dispatch(addCommentsAC(response.data))
    })
}