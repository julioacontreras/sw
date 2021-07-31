<template>
  <div>
    {{ id }}
    {{ personSelected }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'

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
    // find and set in store person
    onMounted(() => {
      if (!store.isLoad) {
        store.executeWhenIsReadyToUse = () => {
          store.refetchPersonSelected(props.id)
        }
      } else {
        store.refetchPersonSelected(props.id)
      }
    })
    return {
      // computed
      personSelected: computed(() => store.personSelected),
      // event
      onMounted
    }
  }
})
</script>
