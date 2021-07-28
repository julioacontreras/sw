<template>
  <div class="columns is-mobile">
    <CardPeople
      v-for="(person, index) in people"
      :key="'cardPeople' + index"
      :title="person.name"
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
