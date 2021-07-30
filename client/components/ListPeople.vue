<template>
  <div>
    <div class="container mx-auto grid gap-6 sm:grid-cols-3 md:grid-cols-3 pt-6">
      <CardPeople
        v-for="(person, index) in people"
        :key="'cardPeople' + index"
        v-bind="person"
        icon="cellphone-link"
        class="is-1"
      >
        {{ person.description }}
      </CardPeople>
    </div>
    <Pagination @change="changePagination" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import CardPeople from './CardPeople.vue'
import Pagination from './Pagination.vue'

export default defineComponent({
  components: {
    CardPeople,
    Pagination
  },
  setup () {
    const store = usePeopleStore()
    onMounted(() => {
      store.loadPeople(9)
    })
    return {
      people: computed(() => store.collection.people),
      onMounted
    }
  },
  methods: {
    changePagination (settings: any) {
      // store.collection
      console.log(settings)
    }
  }
})
</script>

<style scoped>
.columnsList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
