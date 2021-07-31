<template>
  <section class="container mx-auto">
    <Breadcrumbs :routes="routes" />
    <ListPeople />
  </section>
</template>

<script>
import ListPeople from '../components/ListPeople.vue'
import Breadcrumbs from '../components/Breadcrumbs.vue'

export default {
  components: {
    ListPeople,
    Breadcrumbs
  },
  data () {
    return {
      routes: [
        {
          label: 'Home',
          to: '/',
          symbol: '/',
          active: true
        },
        {
          label: 'Characters',
          symbol: '',
          active: false
        }
      ]
    }
  }
}
</script>
