import axios from 'axios';

const KEY = 'AIzaSyCOENg_SSKdL66e0EB3Nzduu3mzq8QfuuE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});