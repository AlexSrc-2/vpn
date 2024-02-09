<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Plans">
        <RouterLink to="/plans/add" class="table-top-button">
          <VBtn>
            <VIcon
              icon="bx-plus"
              class="nav-item-icon"
            />
            Add plan
          </VBtn>
        </RouterLink>
        <Table
          :items="plans"
          :column-names="columnNames"
          :param-names="paramNames"
          delete-url="/cms/admin/delete-plan"
          @deleted-item="plansStore.list()"
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
                  @update="plansStore.list()"
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
import { usePlansStore } from "@/store/plans.module";
import PlanEditFrom from "@/components/plans/PlanEditFrom.vue";

const plansStore = usePlansStore();
const plans = computed(() => plansStore.getPlans)
plansStore.list()

const columnNames = ['ID', 'Title', 'Eligibility criteria', 'Description', 'Start date', 'End date']
const paramNames = ['id', 'plan_title', 'eligibility_criteria', 'plan_description', 'start_date', 'end_date']
</script>
<style scoped lang="scss">
.table-top-button {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
</style>
