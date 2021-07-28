<template>
  <section>
    <Carousel />
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>

      {{ people }}
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Carousel from '~/components/Carousel'
import AllPeopleGQL from '~/apollo/queries/allPeople.gql'

export default {
  name: 'HomePage',
  components: {
    Card,
    Carousel
  },
  data () {
    return {
      loading: false,
      people: []
    }
  },
  async mounted () {
    try {
      const response = await this.$apollo.query({
        query: AllPeopleGQL,
        variables: {}
      })
      this.people = response.data.allPeople.people
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
