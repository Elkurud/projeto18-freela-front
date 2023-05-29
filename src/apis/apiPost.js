import axios from "axios"

const URL = "https://zuckbookapi.onrender.com"

function userToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getPosts(token) {
    const promise = axios.get(`${URL}/post`, userToken(token))
    return promise
}

function getPostById(token, id) {
    const promise = axios.get(`${URL}/post/${id}`, userToken(token))
    return promise
}

function addPost(token, body) {
    const promise = axios.post(`${URL}/post`, body, userToken(token))
    return promise
}

const apiPost = { getPosts, getPostById, addPost }
export default apiPost