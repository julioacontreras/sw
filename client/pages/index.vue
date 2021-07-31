<template>
  <section>
    <Carousel />
    <ListPeople :per-page="12" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ListPeople from '../components/ListPeople.vue'
import Carousel from '../components/Carousel.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    ListPeople,
    Carousel
  }
})
</script>
