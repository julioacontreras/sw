<template>
  <div class="section-padding">
    <b-pagination
      v-model="current"
      :total="total"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
    }
  },
  watch: {
    current (val) {
      this.$emit('change', {
        current: this.current,
        rangeBefore: this.rangeBefore,
        rangeAfter: this.rangeAfter
      })
      return val
    }
  }
}
</script>
