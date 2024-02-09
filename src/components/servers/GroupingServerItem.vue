<template>
  <VCard :title="item.server_name">
    <VBtnGroup class="table-top-button">
      <VBtn>
        <VIcon
          icon="bx-plus"
          class="nav-item-icon"
        />
        Add Server
      </VBtn>
      <VBtn @click="isOpened = !isOpened">
        {{ buttonText }}
      </VBtn>

    </VBtnGroup>

    <Table
      v-show="isOpened"
      :items="item.v2rayServersDetails_"
      :column-names="columnNames"
      :param-names="paramNames"
      edit-url="/servers/edit/"
      delete-url="/cms/admin/server-delete"
      @deleted-item="serversStore.list(null, 1)"
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
              @update="serversStore.list(null, 1)"
            />
          </template>
        </VDialog>
      </template>
    </Table>
  </VCard>
</template>

<script setup>
import Table from '@/components/Table.vue'
import { useServersStore } from "@/store/servers.module";
import ServerEditFrom from "@/components/servers/ServerEditFrom.vue";

const emit = defineEmits()
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})

const isOpened = ref(false)
const buttonText = computed(() => isOpened.value ? 'Close' : 'Open')

const columnNames = ['ID', 'Server Name', 'IP', 'Encryption Methods', 'Platform', 'Flag']
const paramNames = ['id', 'server_name', 'server_address', 'encryption_methods', 'platform', 'server_flag']

const serversStore = useServersStore();
</script>

<style scoped lang="scss">
.table-top-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
</style>
