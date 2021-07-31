<template>
  <div class="section-padding">
    <nav class="pagination is-centered">
      <button
        aria-label="Previous page"
        class="pagination-link pagination-previous"
        v-bind="prevParams"
        @click="prev"
      >
        <span class="icon" aria-hidden="true">
          <i class="mdi mdi-chevron-left mdi-24px" />
        </span>
      </button>
      <button
        aria-label="Next page"
        class="pagination-link pagination-next"
        v-bind="nextParams"
        @click="next"
      >
        <span class="icon" aria-hidden="true">
          <i class="mdi mdi-chevron-right mdi-24px" />
        </span>
      </button>
      <ul class="pagination-list">
        <li />
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    perPage: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      page: 1,
      prevParams: {
        disabled: 'disabled'
      },
      nextParams: {
        disabled: 'disabled'
      }
    }
  },
  methods: {
    activedPrev (active) {
      this.prevParams = active ? {} : { disabled: 'disabled' }
    },
    activedNext (active) {
      this.nextParams = active ? {} : { disabled: 'disabled' }
    },
    prev () {
      this.page--
      if (this.page > 1) {
        this.$emit('change', { button: 'prev', page: this.page, hasPrevious: true, hasNext: true })
      } else {
        this.$emit('change', { button: 'prev', page: this.page, hasPrevious: false, hasNext: true })
      }
      if (this.page < 1) {
        this.page = 1
      }
    },
    next () {
      const current = this.perPage * this.page
      const nextPagePosition = (current + this.perPage)
      this.page++
      if (nextPagePosition > this.total) {
        this.$emit('change', { button: 'next', page: this.page, hasNext: false, hasPrevious: true })
      } else {
        this.$emit('change', { button: 'next', page: this.page, hasNext: true, hasPrevious: true })
      }
    }
  }
}
</script>
