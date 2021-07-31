<template>
  <section class="container mx-auto">
    <Breadcrumbs :routes="routes" />
    <DetailPeople :id="id" />
  </section>
</template>

<script>
import DetailPeople from '../../components/DetailPeople.vue'
import Breadcrumbs from '../../components/Breadcrumbs.vue'

export default {
  components: {
    DetailPeople,
    Breadcrumbs
  },
  data () {
    return {
      id: '',
      routes: [
        {
          label: 'Home',
          to: '/',
          symbol: '/',
          active: true
        },
        {
          label: 'Characters',
          to: '/characters',
          symbol: '/',
          active: true
        },
        {
          label: 'Detail',
          symbol: '',
          active: false
        }
      ]
    }
  },
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>
