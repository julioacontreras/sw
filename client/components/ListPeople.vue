<template>
  <div>
    <div class="grid gap-6 sm:grid-cols-3 md:grid-cols-4 pt-6">
      <CardPeople
        v-for="(person, index) in people"
        :key="'cardPeople' + index"
        v-bind="person"
        icon="cellphone-link"
        class="is-1"
      />
      {{ person }}
    </div>
    <Pagination
      ref="pagination"
      :per-page="perPage"
      :total="total"
      class="pt-3"
      @change="changePagination"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import Log from '../plugins/log'
import { SettingsPaginationType } from '../types/SettingsPaginationType'
import CardPeople from './CardPeople.vue'
import Pagination from './Pagination.vue'

interface PaginationRef {
  activedPrev: any;
  activedNext: any;
}

export default defineComponent({
  components: {
    CardPeople,
    Pagination
  },
  props: {
    perPage: {
      type: Number,
      default: 12
    }
  },
  setup (props) {
    // this value enter in `return` and in function `onMounted`
    // come with params component Pagination
    const pagination = ref(null)

    // store people
    const store = usePeopleStore()

    // -----------------
    // methods

    const updateButtonsPagination = (settings: SettingsPaginationType) => {
      const objPagination = pagination.value! as PaginationRef | null
      if (objPagination) {
        // WORKAROUND because the property 'pageInfo.hasNextPage, pageInfo.hasPreviousPage' dosent work in SWAPI GraphQL
        if (settings.hasPrevious !== undefined) {
          objPagination.activedPrev(settings.hasPrevious)
        }
        if (settings.hasNext !== undefined) {
          objPagination.activedNext(settings.hasNext)
        }
      } else {
        Log.error('Not found pagination')
      }
    }

    const loadPeople = async () => {
      try {
        await store.loadPeople({ first: props.perPage })
        updateButtonsPagination({ page: 1, hasPrevious: false, hasNext: true })
      } catch (error) {
        Log.error(error)
      }
    }

    const changePagination = async (settings: SettingsPaginationType) => {
      if (settings.button === 'next') {
        await store.refetchPeople({ first: props.perPage, after: store.collection.next! })
      } else
      if (settings.button === 'prev') {
        await store.refetchPeople({ last: props.perPage, before: store.collection.previous! })
      }
      updateButtonsPagination(settings)
    }

    // -----------------
    // events

    onMounted(async () => {
      await loadPeople()
    })
    return {
      // $refs
      pagination,
      // methods to use in html
      loadPeople,
      changePagination,
      // computed
      people: computed(() => store.collection.people),
      total: computed(() => store.collection.count),
      // mounted
      onMounted
    }
  }
})
</script>
