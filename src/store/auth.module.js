import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user 
    ? { loggedIn: true, user }
    : { loggenIn: false, user: null }

export const useAuthStore = defineStore('auth', {
    state: () => (initialState),
    // getters
    getters: {
        isAuthenticated: (state) => state.user !== null
    },
    namespaced: true,
    actions: {
        login(user) {
            return AuthService.login(user).then(
                userData => {
                    this.loggedIn = true;
                    this.user = userData.data;
                    return Promise.resolve(user);
                },
                error => {
                    this.loggedIn = false;
                    this.user = null;
                    return Promise.reject(error);
                }
            );
        },
        logout() {
            AuthService.logout();
            this.loggedIn = false;
            this.user = null;
        },
        register(user) {
            return AuthService.register(user).then(
                response => {
                    this.loggedIn = false;
                    return Promise.resolve(response.data);
                },
                error => {
                    this.loggedIn = false;
                    return Promise.reject(error);
                }
            );
        },
        refreshToken(accessToken) {
            this.loggedIn = true;
            this.user = {...this.user, accessToken: accessToken}
        }
    }
});
