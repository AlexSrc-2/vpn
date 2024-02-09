<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Recommended Servers">
        <RouterLink to="/servers/add" class="table-top-button">
          <VBtn>
            <VIcon
              icon="bx-plus"
              class="nav-item-icon"
            />
            Add server
          </VBtn>
        </RouterLink>
        <Table
          :items="servers"
          :column-names="columnNames"
          :param-names="paramNames"
          edit-url="/servers/edit/"
          edit-component="ServerEditFrom"
          delete-url="/cms/admin/server-delete"
          @deleted-item="serversStore.list(RecommendationType)"
        >
          <template v-slot:edit="item">
            <VDialog width="800">
              <template v-slot:activator="{ props }">
                <VBtn v-bind="props">
                  <VIcon
                    icon="bx-edit"
                    class="nav-item-icon"
                  />
                </VBtn>
              </template>

              <template v-slot:default="{ isActive }">
                <ServerEditFrom
                  :item="item.item"
                  @close="isActive.value = false"
                  @update="serversStore.list(RecommendationType)"
                />
              </template>
            </VDialog>
          </template>
        </Table>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import { useServersStore } from "@/store/servers.module";
import Table from '@/components/Table.vue'
import ServerEditFrom from "@/components/servers/ServerEditFrom.vue";

const RecommendationType = 1
const serversStore = useServersStore();
const servers = computed(() => serversStore.getServers)
serversStore.list(RecommendationType)

const columnNames = ['ID', 'Server Name', 'IP', 'Encryption Methods', 'Platform', 'Flag']
const paramNames = ['id', 'server_name', 'server_address', 'encryption_methods', 'platform', 'server_flag']
</script>
<style scoped lang="scss">
.table-top-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
</style>

