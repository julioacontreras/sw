<template>
  <div>
    <div class="flex justify-center pt-6 pb-2">
      <b-field class="w-6/12">
        <b-input v-model="searchText" placeholder="Search" rounded />
      </b-field>
    </div>
    <div class="grid gap-6 sm:grid-cols-3 md:grid-cols-4 pt-6">
      <CardPeople
        v-for="(person, index) in people"
        :key="'cardPeople' + index"
        v-bind="person"
        icon="cellphone-link"
        class="is-1"
      />
    </div>
    <Pagination
      ref="pagination"
      :per-page="perPage"
      :total="total"
      class="pt-5 pb-6"
      @change="changePagination"
    />
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, onMounted, computed } from '@nuxtjs/composition-api'
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
  setup () {
    // this value enter in `return` and in function `onMounted`
    // come with params component Pagination
    const pagination = ref(null)
    const searchText = ref<string>('')

    // store people
    const store = usePeopleStore()

    // -----------------
    // watch

    watch(searchText, (newValue) => {
      store.searchPeopleByText(newValue)
    })

    // -----------------
    // methods

    const updateButtonsPagination = (settings: SettingsPaginationType) => {
      store.clearSearch()
      searchText.value = ''
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

    const changePagination = async (settings: SettingsPaginationType) => {
      if (settings.button === 'next') {
        await store.refetchPeople({ first: store.perPageDefault, after: store.collection.next! })
      } else
      if (settings.button === 'prev') {
        await store.refetchPeople({ last: store.perPageDefault, before: store.collection.previous! })
      }
      updateButtonsPagination(settings)
    }

    // -----------------
    // events

    onMounted(() => {
      updateButtonsPagination({ page: 1, hasPrevious: false, hasNext: true })
    })
    return {
      // $refs
      pagination,
      searchText,
      // methods to use in html
      changePagination,
      // computed
      people: computed(() => store.collection.people),
      total: computed(() => store.collection.count),
      perPage: computed(() => store.perPageDefault),
      // mounted
      onMounted
    }
  }
})
</script>
