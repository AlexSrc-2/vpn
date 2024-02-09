<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Packages">
        <RouterLink to="/packages/add" class="table-top-button">
          <VBtn>
            <VIcon
              icon="bx-plus"
              class="nav-item-icon"
            />
            Add package
          </VBtn>
        </RouterLink>
        <Table
          :items="packages"
          :column-names="columnNames"
          :param-names="paramNames"
          delete-url="/cms/admin/delete-package"
          @deleted-item="packagesStore.list()"
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
                <PlanEditFrom
                  :item="item.item"
                  @close="isActive.value = false"
                  @update="packagesStore.list()"
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
import { usePackagesStore } from "@/store/packages.module";
import PlanEditFrom from "@/components/plans/PlanEditFrom.vue";

const packagesStore = usePackagesStore();
const packages = computed(() => packagesStore.getPackages)
packagesStore.list()

const columnNames = ['ID', 'Name', 'Device type', 'Months', 'Price', 'Status']
const paramNames = ['id', 'name', 'device_type', 'months', 'price', 'status']
</script>
<style scoped lang="scss">
.table-top-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
</style>
