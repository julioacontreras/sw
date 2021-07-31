<template>
  <nav class="flex">
    <div
      v-for="(route, index) in routes"
      :key="'route' + index"
    >
      <nuxt-link
        v-if="route.active"
        :to="route.to"
        :aria-label="route.label"
        class="inline"
      >
        {{ route.label }}
      </nuxt-link>
      <div
        v-if="!route.active"
        :aria-label="route.label"
        class="inline font-bold"
      >
        {{ route.label }}
      </div>
      <div class="inline px-1">
        {{ route.symbol }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
