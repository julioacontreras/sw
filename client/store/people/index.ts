import { defineStore } from 'pinia'
// import { getCollectionPeople } from '../../plugins/api/getCollectionPeople'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { State } from './state'

const state: State = {
  collection: {
    count: 0,
    next: null,
    previous: null,
    results: []
  } as CollectionPeopleType
}

export const StateInterface = state

export const usePeopleStore = defineStore({
  id: 'people',
  state: () => state,
  actions: {
    load () {
      // this.collection = getCollectionPeople()
    }
  }
})
