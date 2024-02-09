import PackagesService from "../services/packages.service";

export const usePackagesStore = defineStore('packages', {
    state: () => ({
        packages: []
    }),
    // getters
    getters: {
        getPackages: (state) => state.packages
    },
    namespaced: true,
    actions: {
        list() {
            return PackagesService.list()
                .then((packagesData) => {
                    this.packages = packagesData;
                    return Promise.resolve(packagesData);
                });
        }
    }
});
