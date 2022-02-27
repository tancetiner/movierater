import axios from 'axios'

const saveRequest = async (username, movieData) => {
    const save = {
        username: username,
        movie: movieData
    }

    console.log('in the save request')
    const request = await axios.post('http://127.0.0.1:8000/api/save', save)
    return request;
}


export default saveRequest;