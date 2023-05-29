import axios from "axios"

const url = "https://zuckbookapi.onrender.com"

function signIn(info) {
    const promise = axios.post(`${url}/signin`, info)
    return promise
}

function signUp(info) {
    const promise = axios.post(`${url}/signup`, info)
    return promise
}

const apiSign = { signIn, signUp } 
export default apiSign