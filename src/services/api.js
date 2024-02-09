import axios from "axios";
console.log(JSON.parse(localStorage.getItem('token')))
const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        "Content-Type": "application/json"
    },
});

instance.interceptors.request.use(
    config => {
        // Получаем токен из localStorage каждый раз при отправке запроса
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['authentication'] = JSON.parse(token); // Устанавливаем заголовок
        }
        return config;
    },
    error => {
        // Обработка ошибки запроса
        return Promise.reject(error);
    }
);

export default instance;
