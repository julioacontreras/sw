<template>
  <div class="flex justify-end">
    <span class="font-bold"> {{ label }}: </span>
    {{ description }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
