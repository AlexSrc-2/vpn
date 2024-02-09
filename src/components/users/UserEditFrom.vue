<template>
  <VCard :title="item.user_name">
    <VCardText>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <label for="user_name">User name</label>
          <VTextField
            id="user_name"
            v-model="form.user_name"
            placeholder="User name"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="email">Email</label>
          <VTextField
            id="email"
            v-model="form.email"
            placeholder="Email"
            type="email"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="user_type">User type</label>
          <VSelect
            id="user_type"
            v-model="form.user_type"
            placeholder="User type"
            :items="['Individual', 'Partner']"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="balance">Balance</label>
          <VTextField
            id="balance"
            v-model="form.balance"
            placeholder="Balance"
            type="number"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="6"
        >
          <label for="free_usage_time">Free usage time</label>
          <VTextField
            id="free_usage_time"
            v-model="form.free_usage_time"
            placeholder="Free usage time"
            type="number"
            persistent-placeholder
          />
        </VCol>
<!--        <VCol-->
<!--          cols="12"-->
<!--          md="6"-->
<!--        >-->
<!--          <label for="plan_description">Start date</label>-->
<!--          <DateInput v-model="form.start_date"/>-->
<!--        </VCol>-->
<!--        <VCol-->
<!--          cols="12"-->
<!--          md="6"-->
<!--        >-->
<!--          <label for="plan_description">End date</label>-->
<!--          <DateInput v-model="form.end_date"/>-->
<!--        </VCol>-->
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
import UsersService from "@/services/users.service";
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
  UsersService.update(form.value)
    .then(() => {
      emit('update')
    })
}

</script>
