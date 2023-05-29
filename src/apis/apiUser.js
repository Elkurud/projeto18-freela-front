import axios from "axios"

const URL = "https://zuckbookapi.onrender.com"

function userToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function listFollower(token) {

}

function follow(token, id) {
    const promise = axios.post(`${URL}/user/follow/${id}`, {}, userToken(token))
    return promise
}

const apiUser = {listFollower, follow}

export default apiUser