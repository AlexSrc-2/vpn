import api from "./api";
import TokenService from "./token.service"

class PlansService {
    list(){
        return api.get('http://testguider.com/vpnV2/api/cms/admin/plan-list')
            .then(response => {
                return response.data.data;
            });
    }
    update(serverForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/update-plan', serverForm)
            .then(response => {
                return response.data.data;
            });
    }
    create(planForm){
        return api.post('http://testguider.com/vpnV2/api/cms/admin/plan', planForm)
            .then(response => {
                return response.data.data;
            });
    }
}

export default new PlansService();
