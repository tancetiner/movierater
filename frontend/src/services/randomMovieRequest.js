import axios from 'axios'

const randomMovieRequest = async () => {
    console.log('inside the movie request');
    const request = await axios.get('https://k2maan-moviehut.herokuapp.com/api/random');
    return request;
}

export default randomMovieRequest;