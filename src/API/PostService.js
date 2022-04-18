import axios from 'axios'

export default class PostService {
    static async getAll () {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        } catch (e) {
            console.log(e);
        }
    }

    static async getById (id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return response.data
        } catch (e) {
            console.log(e);
        }
    }
}