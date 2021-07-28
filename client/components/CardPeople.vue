<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          :alt="title"
        >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">
            {{ title }}
          </p>
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
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
