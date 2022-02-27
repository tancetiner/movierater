import axios from 'axios'

const loginRequest = async (username, password) => {
    const user = {
        username: username,
        password: password
    }
    console.log('in the request')
    const request = await axios.post('http://127.0.0.1:8000/api/login', user)
    return request;
}


export default loginRequest;