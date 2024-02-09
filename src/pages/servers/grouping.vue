<template>
  <VRow>
    <VCol cols="12">
      <VBtn class="d-flex ml-auto">
        <VIcon
          icon="bx-plus"
          class="nav-item-icon"
        />
        Add group
      </VBtn>
      <GroupingServerItem class="mt-2 mb-2" v-for="server in servers" :item="server" />
    </VCol>
  </VRow>
</template>
<script setup>
import { useServersStore } from "@/store/servers.module";
import GroupingServerItem from "@/components/servers/GroupingServerItem.vue";

const serversStore = useServersStore();
const servers = computed(() => serversStore.getServers)
serversStore.list(null, 1)
</script>

