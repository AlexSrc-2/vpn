import axios from "axios";
let token = JSON.parse(localStorage.getItem('token'));

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-Type": "application/json",
        'authentication': token
    },
});

export default instance;
