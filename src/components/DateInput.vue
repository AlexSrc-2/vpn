<template>
  <vMenu
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
  >
    <template v-slot:activator="{ props }">
      <v-text-field
        v-model="dateFormatted"
        label="Select date"
        prepend-icon="mdi-calendar"
        v-bind="props"
      ></v-text-field>
    </template>
    <VDatePicker
      id="start_date"
      v-model="value"
      placeholder="Start date"
    />
  </vMenu>
</template>
<script setup>
const emit = defineEmits()
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
})


const dateFormatted = ref('')
const menu = ref(true)
const value = ref(null)

const parseDate = (date) => {
  if (!date) return null
  date = new Date(date)
  const [day, month, year] = [date.getDate().toString(), (date.getMonth() + 1).toString(), date.getFullYear().toString()]
  dateFormatted.value = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}

watch([value], (newValue) => {
  parseDate(newValue)
  console.log(324234234)
  emit('update:modelValue', dateFormatted.value)
})
watch(props.modelValue, () => {
  if (props.modelValue) {
    value.value = new Date(props.modelValue)
  } else {
    value.value = null
  }
}, { immediate: true })
</script>
