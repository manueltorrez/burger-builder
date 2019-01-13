import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-45502.firebaseio.com/"
});

export default instance;