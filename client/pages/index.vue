<template>
  <section>
    <Carousel />
    <ListPeople :people="people" />
  </section>
</template>

<script lang="ts">
import { watch, defineComponent, onMounted } from '@nuxtjs/composition-api';
import { useQuery } from '@vue/apollo-composable'

import { usePeopleStore } from '../store/people'

import ListPeople from '~/components/ListPeople.vue'
import Carousel from '~/components/Carousel.vue'
import ALL_PEOPLE_GQL from '~/apollo/queries/allPeople.gql'

interface AllPeopleType {
  allPeople: {
    people: []
  }
}

export default defineComponent({
  name: 'HomePage',
  components: {
    ListPeople,
    Carousel
  },
  setup () {
    const store = usePeopleStore()

    onMounted(() => {
      try {
        const { result } = useQuery<AllPeopleType>(ALL_PEOPLE_GQL)
        console.log(result.value)
        const data = result.value as AllPeopleType
        console.log(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    })

    watch(store.collection.people, (value) => {
      return value
    })

    return {
      onMounted
    }
  }
})
</script>
