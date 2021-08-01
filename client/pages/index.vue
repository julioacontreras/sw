<template>
  <section>
    <Carousel />
    <div class="container mx-auto">
      <ListPeople />
      <DetailPeople />
    </div>
  </section>
</template>

<script>
import ListPeople from '../components/ListPeople.vue'
import Carousel from '../components/Carousel.vue'
import DetailPeople from '../components/DetailPeople.vue'

export default {
  components: {
    ListPeople,
    Carousel,
    DetailPeople
  }
}
</script>
