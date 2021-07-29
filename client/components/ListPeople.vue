<template>
  <div class="columnsList">
    <CardPeople
      v-for="(person, index) in people"
      :key="'cardPeople' + index"
      v-bind="person"
      icon="cellphone-link"
    >
      {{ person.description }}
    </CardPeople>
  </div>
</template>

<script>
import CardPeople from '~/components/CardPeople'

export default {
  components: {
    CardPeople
  },
  props: {
    people: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.columnsList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
