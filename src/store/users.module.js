import UsersService from "../services/users.service";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        page: 1,
        pages: 1,
        count: 0
    }),
    // getters
    getters: {
        getUsers: (state) => state.users,
        getPage: (state) => state.page,
        getPages: (state) => state.pages,
        getCount: (state) => state.count,
    },
    namespaced: true,
    actions: {
        listUsers(userType = null, page = 1, perPage = 20) {
            const dataProcessing = (usersData) => {
                this.users = usersData.users;
                this.page = usersData.pagination.page;
                this.pages = usersData.pagination.pages;
                this.count = usersData.pagination.count;
                return Promise.resolve(usersData);
            }
            if (userType) {
                return UsersService.listByUserType(userType, page, perPage).then(dataProcessing);
            } else {
                return UsersService.listUsers(page, perPage).then(dataProcessing);
            }
        }
    }
});
