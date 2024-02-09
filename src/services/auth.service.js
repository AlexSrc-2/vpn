import api from "./api";
import TokenService from "./token.service"

class AuthService {
    login({username, password}){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/login', {
            username,
            password
        }).then(response => {
            if (response.data.data.token) {
                TokenService.setToken(response.data.data.token);
                TokenService.setUser(response.data.data.data);
            }

            return response.data;
        });
    }

    logout(){
        TokenService.removeUser();
        TokenService.removeToken();
    }

    register({username, email, password}) {
        return api.post('/auth/signup', {
            username,
            email,
            password
        });
    }
}

export default new AuthService();
