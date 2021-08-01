<template>
  <div>
    <div v-if="!personSelected">
      Loading...
    </div>
    <div v-if="personSelected">
      <div class="flex justify-center font-bold">
        <div
          class="text-5xl"
        >
          {{ personSelected.name }}
        </div>
      </div>
      <div class="flex pt-6">
        <div class="w-6/12">
          <LabelDetail label="Height" :description="String(personSelected.height)" />
          <LabelDetail label="Mass" :description="String(personSelected.mass)" />
          <LabelDetail label="Hair color" :description="personSelected.hairColor" />
          <LabelDetail label="Skin color" :description="personSelected.skinColor" />
          <LabelDetail label="Yey color" :description="personSelected.eyeColor" />
          <LabelDetail label="Birth year" :description="personSelected.birthYear" />
          <LabelDetail label="Gender" :description="personSelected.gender" />
        </div>
        <div class="w-6/12">
          <img
            v-if="personSelected.imageBig"
            :src="personSelected.imageBig"
            :alt="personSelected.name"
            class="w-64"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from '@nuxtjs/composition-api'
import { usePeopleStore } from '../store/people'
import LabelDetail from './LabelDetail.vue'

export default defineComponent({
  components: {
    LabelDetail
  },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // store people
    const store = usePeopleStore()
    // find and set in store person
    onMounted(() => {
      if (!store.isLoad) {
        store.executeWhenIsReadyToUse = () => {
          store.refetchPersonSelected(props.id)
        }
      } else {
        store.refetchPersonSelected(props.id)
      }
    })
    return {
      // computed
      personSelected: computed(() => store.personSelected),
      // event
      onMounted
    }
  }
})
</script>
