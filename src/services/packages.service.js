import api from "./api";
import TokenService from "./token.service"

class PackagesService {
    list(){
        return api.get('http://testguider.com/vpnV2/api/cms/admin/packages-list')
            .then(response => {
                return response.data.data;
            });
    }
    update(serverForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/delete-package', serverForm)
            .then(response => {
                return response.data.data;
            });
    }
    create(packageForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/package', packageForm)
            .then(response => {
                return response.data.data;
            });
    }
}

export default new PackagesService();
