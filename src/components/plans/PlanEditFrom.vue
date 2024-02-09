<template>
  <VCard :title="item.plan_title">
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <label for="plan_title">Plan title</label>
          <VTextField
            id="plan_title"
            v-model="form.plan_title"
            placeholder="Plan title"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="eligibility_criteria">Eligibility criteria</label>
          <VTextField
            id="eligibility_criteria"
            v-model="form.eligibility_criteria"
            placeholder="Eligibility criteria"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="plan_description">Plan description</label>
          <VTextField
            id="plan_description"
            v-model="form.plan_description"
            placeholder="Plan description"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="plan_description">Start date</label>
          <DateInput v-model="form.start_date"/>
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="plan_description">End date</label>
          <DateInput v-model="form.end_date"/>
        </VCol>
        <!-- 👉 submit and reset button -->
        <VCol
          cols="12"
          md="9"
          class="d-flex gap-4"
        >
        </VCol>
      </VRow>
    </VCardText>

    <VCardActions>
      <VSpacer></VSpacer>
      <VBtn
        color="primary"
        @click="updateServer"
        variant="tonal" type="submit">
        Submit
      </VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
        type="reset"
        @click="$emit('close')"
      >
        Cancel
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup>
import PlansService from "@/services/plans.service";
import DateInput from "@/components/DateInput.vue";

const emit = defineEmits()
const props = defineProps({
  item: {
    type: Object,
    required: true,
  }
})
const form = ref({})

onMounted(() => {
  form.value = props.item
})

const updateServer = () => {
  PlansService.update(form.value)
    .then(() => {
      emit('update')
    })
}

</script>
