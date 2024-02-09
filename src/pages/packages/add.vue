<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Add package">
          <VCardText>
            <VRow>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="name">Package Name</label>
                  </VCol>
                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="name"
                      v-model="form.name"
                      placeholder="Package Name"
                      persistent-placeholder
                    />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="device_type">Device type</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VSelect
                      id="device_type"
                      v-model="form.device_type"
                      placeholder="Device type"
                      :items="[
                        'ios', 'All', 'Android', 'Mac',
                      ]"
                    />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="months">Months</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="months"
                      v-model.number="form.months"
                      placeholder="Months"
                      type="number"
                      persistent-placeholder
                    />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="price">Price</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="price"
                      v-model.number="form.price"
                      placeholder="Price"
                      type="number"
                      persistent-placeholder
                    />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="status">Status</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VSelect
                      id="status"
                      v-model="form.status"
                      placeholder="Status"
                      :items="[
                        { title: 'On', value: 1 },
                        { title: 'Off', value: 0 }
                      ]"
                    />
                  </VCol>
                </VRow>
              </VCol>

              <!-- 👉 submit and reset button -->
              <VCol
                offset-md="3"
                cols="12"
                md="9"
                class="d-flex gap-4"
              >
                <VBtn type="submit" @click="createServer">
                  Submit
                </VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
<script setup>
import PackagesService from "@/services/packages.service";
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter();
const form = ref({
  "name": '',
  "device_type": 'all',
  "product_id": '',
  "user_type_versions": 1,
  "months": 0,
  "price": 10,
  "status": 1
})

const createServer = () => {
  PackagesService.create(form.value)
    .then(() => {
      router.push('/packages');
    })
}


</script>
