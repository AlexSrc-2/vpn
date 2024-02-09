import api from "./api";

class UsersService {
    listUsers(page = 1, perPage = 20){
        return api.get('http://testguider.com/vpnV2/api/cms/admin/list', {
            params: {
                'page': page,
                'per_page': perPage
            }
        })
            .then(response => {
                return response.data.data;
            });
    }
    listByUserType(userType = 'Individual', page = 1, perPage = 20){
        return api.get('http://testguider.com/vpnV2/api/cms/admin/user-list', {
            params: {
                'user_type': userType,
                'page': page,
                'per_page': perPage
            }
        })
            .then(response => {
                return response.data.data;
            });
    }
    update(userForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/update', userForm)
            .then(response => {
                return response.data.data;
            });
    }
}

export default new UsersService();
