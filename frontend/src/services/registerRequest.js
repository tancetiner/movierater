import axios from 'axios'

const registerRequest = (username, password) => {
    const user = {
        username: username,
        password: password
    }
    console.log('in the register request')
    const request = axios.post('http://127.0.0.1:8000/api/register', user)
    return request
}


export default registerRequest;