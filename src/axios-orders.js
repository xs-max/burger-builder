import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://burger-builder-bc009.firebaseio.com/'
    }
);

export default instance;