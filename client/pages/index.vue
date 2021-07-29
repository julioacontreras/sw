<template>
  <section>
    <Carousel />
    <ListPeople :people="people" />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@nuxtjs/composition-api'

import { usePeopleStore } from '../store/people'

import ListPeople from '~/components/ListPeople.vue'
import Carousel from '~/components/Carousel.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    ListPeople,
    Carousel
  },
  setup () {
    const store = usePeopleStore()

    onMounted(() => {
      store.loadPeople()
    })

    return {
      people: computed(() => store.collection.people),
      onMounted
    }
  }
})
</script>
