import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyDoIE4005zL-jmqpjsKh1R03lDF7Foyc0I'
    }
});