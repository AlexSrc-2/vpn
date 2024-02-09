<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Add plan">
          <VCardText>
            <VRow>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="eligibility_criteria">Eligibility criteria</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="eligibility_criteria"
                      v-model="form.eligibility_criteria"
                      placeholder="Eligibility criteria"
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
                    <label for="plan_title">Plan title</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="plan_title"
                      v-model="form.plan_title"
                      placeholder="Plan title"
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
                    <label for="plan_description">Plan description</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <VTextField
                      id="plan_description"
                      v-model="form.plan_description"
                      placeholder="Plan description"
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
                    <label for="plan_description">Start date</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <DateInput v-model="form.start_date"/>
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12">
                <VRow no-gutters>
                  <VCol
                    cols="12"
                    md="3"
                  >
                    <label for="plan_description">End date</label>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                  >
                    <DateInput v-model="form.end_date"/>
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
