import axios from "axios";

// const instance = axios.create({
//     baseUrl: 'https://jsonplaceholder.typicode.com/'
// })

export const postsApi = {
    getPosts () {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    getPostByID(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    },
    getCommentsByPostId(id) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    },
    addPost(post) {
        return axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
    }, 
    updatePost(id, post) {
        return axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {post})
    },
    deletePost(id) {
        return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    },
    addComments() {
        return axios.get('https://jsonplaceholder.typicode.com/comments')
    }
}