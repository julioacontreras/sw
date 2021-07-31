<template>
  <div>
    {{ id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    id: {
      type: String,
      default: ''
    }
  }
})
</script>
