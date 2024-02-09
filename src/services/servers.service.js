import api from "./api";
import TokenService from "./token.service"

class ServersService {
    list(serverType = null, parentWithChild = 0, page = 1, perPage = 20){
        return api.get('http://testguider.com/vpnV2/api/cms/admin/server-detail', {
            params: {
                'serverType': serverType,
                'parent_with_child': parentWithChild,
                'page': page,
                'per_page': perPage
            }
        })
            .then(response => {
                return response.data.data;
            });
    }
    update(serverForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/server-update', serverForm)
            .then(response => {
                return response.data.data;
            });
    }
}

export default new ServersService();
