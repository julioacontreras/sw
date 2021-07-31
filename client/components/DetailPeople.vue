<template>
  <div>
    {{ id }}
    {{ personSelected }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import { PeopleType } from '../types/PeopleType'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // store people
    const store = usePeopleStore()
    // set in store person
    const person = store.collection.people.find(person => person.id === props.id) as PeopleType | null
    console.log({ people: store.collection.people })
    console.log({ person })
    if (person) {
      store.setPersonSelected(person)
    }
    return {
      // computed
      personSelected: computed(() => store.personSelected)
    }
  }
})
</script>
