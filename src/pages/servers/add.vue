<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Add server">
          <VCardText>
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Server Name</label>
                <VTextField
                  id="firstName"
                  v-model="form.server_name"
                  placeholder="Server Name"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Host</label>
                <VTextField
                  id="firstName"
                  v-model="form.host"
                  placeholder="Host"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Port</label>
                <VTextField
                  id="firstName"
                  v-model="form.server_port"
                  placeholder="Port"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Network</label>
                <VTextField
                  id="firstName"
                  v-model="form.network"
                  placeholder="Network"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Network security</label>
                <VTextField
                  id="firstName"
                  v-model="form.network_security"
                  placeholder="Network security"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Server address</label>
                <VTextField
                  id="firstName"
                  v-model="form.server_address"
                  placeholder="Server address"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Platform</label>
                <VSelect
                  id="firstName"
                  v-model="form.platform"
                  placeholder="Platform"
                  :items="[
              'ios', 'all',
            ]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Server version</label>
                <VSelect
                  id="firstName"
                  v-model="form.server_version"
                  placeholder="Server version"
                  :items="[
              1, 2, 3, 3
            ]"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">File</label>
                <VFileInput
                  id="firstName"
                  placeholder="File"
                  persistent-placeholder
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <label for="firstName">Flag</label>
                <VFileInput
                  id="firstName"
                  placeholder="Flag"
                  persistent-placeholder
                />
              </VCol>
              <!-- 👉 Remember me -->
              <VCol
                cols="12"
                md="9"
              >
                <VSwitch
                  color="primary"
                  v-model="form.is_recommended"
                  label="Is recommendation"
                />
              </VCol>

              <!-- 👉 submit and reset button -->
              <VCol
                cols="12"
                md="9"
                class="d-flex gap-4"
              >
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
import PlansService from "@/services/plans.service";
import DateInput from "@/components/DateInput.vue";
import {useRouter} from "vue-router/dist/vue-router";

const router = useRouter();
const form = ref({
  "eligibility_criteria": '',
  "plan_title": '',
  "plan_description": '',
  "start_date": null,
  "end_date": null
})

const createServer = () => {
  PlansService.create(form.value)
    .then(() => {
      router.push('/plans');
    })
}
</script>
