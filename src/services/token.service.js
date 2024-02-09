import api from "./api";

class TokenService {
    getLocalRefreshToken() {
        return JSON.parse(localStorage.getItem("token"));
    }

    getLocalAccessToken() {
        return JSON.parse(localStorage.getItem("token"));
    }

    updateLocalAccessToken(token) {
        this.setToken(token)
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    setUser(user) {
        console.log(JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(user));
    }

    setToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    removeUser() {
        localStorage.removeItem('user');
    }
}

export default new TokenService();
