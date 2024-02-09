import PlansService from "../services/plans.service";

export const usePlansStore = defineStore('plans', {
    state: () => ({
        plans: []
    }),
    // getters
    getters: {
        getPlans: (state) => state.plans
    },
    namespaced: true,
    actions: {
        list() {
            return PlansService.list()
                .then((plansData) => {
                    this.plans = plansData;
                    return Promise.resolve(plansData);
                });
        }
    }
});
