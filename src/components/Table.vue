<template>
  <VTable>
    <thead>
      <tr>
        <th v-for="(columnName, key) in columnNames"
            :class="{
              'text-uppercase': key === 0
            }"
        >
          {{ columnName }}
        </th>
        <th v-if="deleteUrl || editUrl">
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
      >
        <td v-for="(paramName, key) in paramNames"
            :class="{
              'text-center': key !== 0
            }"
        >
          <div v-if="paramName === 'server_flag'">
            <VImg :src="'https://testguider.com/vpnApp/uploads/' + item[paramName]"/>
          </div>
          <div v-else>
            {{ item[paramName] }}
          </div>
        </td>
        <td v-if="deleteUrl || editUrl" class="text-center d-flex gap-1 justify-center align-center">
          <RouterLink v-if="!slots.edit" :to="editUrl + item.id">
            <VBtn>
              <VIcon
                icon="bx-edit"
                class="nav-item-icon"
              />
            </VBtn>
          </RouterLink>
          <slot v-else name="edit" :item="item"></slot>

          <VBtn v-if="!slots.delete" @click="deleteItem(item.id)">
            <VIcon
              icon="bx-trash"
              class="nav-item-icon"
            />
          </VBtn>
          <slot v-else name="delete"></slot>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>
<script setup>
import api from "@/services/api";

const props = defineProps({
  items: {
    type: null,
    required: true,
  },
  page: {
    default: 1,
    required: false,
  },
  perPage: {
    default: 20,
    required: false,
  },
  columnNames: {
    type: null,
    required: true,
  },
  paramNames: {
    type: null,
    required: true,
  },
  deleteUrl: {
    type: String,
    required: false,
  },
  deleteParamId: {
    type: String,
    default: 'id',
    required: false,
  },
  editUrl: {
    type: String,
    required: false,
  }
})

const slots = useSlots();
const emit = defineEmits();

const deleteItem = (id) => {
  const data = {}
  data[props.deleteParamId] = id
  return api.post('http://testguider.com/vpnV2/api' + props.deleteUrl, data)
    .then(response => {
      emit('deleted-item')
    });
}

</script>
