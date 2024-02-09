import ServersService from "../services/servers.service";

export const useServersStore = defineStore('servers', {
    state: () => ({
        servers: [],
        page: 1,
        pages: 1,
        count: 0
    }),
    // getters
    getters: {
        getServers: (state) => state.servers,
        getPage: (state) => state.page,
        getPages: (state) => state.pages,
        getCount: (state) => state.count,
    },
    namespaced: true,
    actions: {
        list(serverType = null, parentWithChild = 0, page = 1, perPage = 20) {
            return ServersService.list(serverType, parentWithChild, page, perPage)
                .then((serversData) => {
                    this.servers = serversData.v2rayServer;
                    this.page = serversData.pagination.page;
                    this.pages = serversData.pagination.pages;
                    this.count = serversData.pagination.count;
                    return Promise.resolve(serversData);
                });
        }
    }
});
