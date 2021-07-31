<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          v-if="!image"
          src="https://bulma.io/images/placeholders/1280x960.png"
          :alt="name"
        >
        <img
          v-if="image"
          :src="image"
          :alt="name"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <div>
            <nuxt-link :to="`/detail/${id}`" class="title is-4">
              {{ name }}
            </nuxt-link>
          </div>
          <p class="subtitle is-6">
            #charactar #sw
          </p>
        </div>
      </div>

      <div class="content">
        <p>
          Birthdat: {{ birthYear }}
        </p>
        <p>
          Gender: {{ gender }}
        </p>
        <p>
          HairColor: {{ hairColor }}
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
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
