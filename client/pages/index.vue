<template>
  <section>
    <Carousel />
    <ListPeople :people="people" />
  </section>
</template>

<script>
import ListPeople from '~/components/ListPeople'
import Carousel from '~/components/Carousel'
import AllPeopleGQL from '~/apollo/queries/allPeople.gql'

export default {
  name: 'HomePage',
  components: {
    ListPeople,
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
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}
</script>
