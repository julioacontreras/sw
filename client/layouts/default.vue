<template>
  <div class="flex flex-col">
    <PageHeader />
    <section>
      <div class="screen">
        <Nuxt />
      </div>
    </section>
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import Log from '../plugins/log'
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'

export default defineComponent({
  components: {
    PageHeader,
    PageFooter
  },
  setup () {
    // store people
    const store = usePeopleStore()

    // -----------------
    // methods
    const loadPeople = async () => {
      try {
        await store.loadPeople({ first: store.perPageDefault })
      } catch (error) {
        Log.error(error)
      }
    }

    // -----------------
    // events
    onMounted(async () => {
      await loadPeople()
    })

    return {
      onMounted
    }
  }
})
</script>
