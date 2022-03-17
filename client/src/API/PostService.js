import axios from "axios";


export class PostService {
    static async getAllPosts(limit, page) {
        const response = await axios.get('http://localhost:5000/posts-api/posts', {
            params: {
                limit,
                page
            }
        })
        return response;
    }

    static async getPostById(id) {
        const response = await axios.get(`http://localhost:5000/posts-api/posts/${id}`);
        return response;
    }

    static async getPostsByType(limit, page, type) {
        const response = await axios.get(`http://localhost:5000/posts-api/posts/${type}`, {
            params: {
                limit,
                page
            }
        })
        return response;
    }
}