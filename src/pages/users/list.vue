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
          @deleted-item="usersStore.listUsers()"
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
                <UserEditFrom
                  :item="item.item"
                  @close="isActive.value = false"
                  @update="usersStore.listUsers()"
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
import Table from '@/components/Table.vue'
import { useUsersStore } from "@/store/users.module";
import { useRoute } from 'vue-router';
import UserEditFrom from "@/components/users/UserEditFrom.vue";

const route = useRoute();

const usersStore = useUsersStore();
const users = computed(() => usersStore.getUsers)
usersStore.listUsers()

const columnNames = ['ID', 'Name', 'Email', 'User Type', 'Type', 'VPN Connected']
const paramNames = ['id', 'user_name', 'email', 'user_type', 'type', 'vpn_connected']
</script>
