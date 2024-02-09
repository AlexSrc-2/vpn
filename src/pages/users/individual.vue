<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Users">
        <Table
          :items="users"
          :column-names="columnNames"
          :param-names="paramNames"
          edit-url="/users/edit/"
          delete-url="/cms/admin/delete"
          delete-param-id="user_id"
          @deleted-item="usersStore.listUsers('Individual')"
        />
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import Table from '@/components/Table.vue'
import { useUsersStore } from "@/store/users.module";

const usersStore = useUsersStore();
const users = computed(() => usersStore.getUsers)
usersStore.listUsers('Individual')

const columnNames = ['ID', 'Name', 'Email', 'User Type', 'Type', 'VPN Connected']
const paramNames = ['id', 'user_name', 'email', 'user_type', 'type', 'vpn_connected']
</script>
