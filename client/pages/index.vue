<template>
  <section>
    <Carousel />
    <div class="container mx-auto">
      <ListPeople :per-page="12" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ListPeople from '../components/ListPeople.vue'
import Carousel from '../components/Carousel.vue'

export default defineComponent({
  components: {
    ListPeople,
    Carousel
  }
})
</script>
