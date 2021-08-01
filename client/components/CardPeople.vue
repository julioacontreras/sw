<template>
  <div class="card">
    <nuxt-link class="card-image" :to="`/detail/${id}`">
      <img
        v-if="!imageSmall"
        src="/assets/img/people/no-image.jpg"
        :alt="name"
        class="object-cover h-44 w-full"
      >
      <img
        v-if="imageSmall"
        :src="imageSmall"
        :alt="name"
        class="object-scale-down h-44 w-full"
      >
    </nuxt-link>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div>
            <nuxt-link :to="`/detail/${id}`" class="title is-4">
              {{ name }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="content">
        <p class="leading-none m-0">
          Birthdat: {{ birthYear }}
        </p>
        <p class="leading-none m-0">
          Gender: {{ gender }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    birthYear: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    hairColor: {
      type: String,
      required: true
    },
    imageSmall: {
      type: String,
      default: ''
    }
  }
}
</script>
