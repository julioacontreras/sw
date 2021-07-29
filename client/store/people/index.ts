import { defineStore } from 'pinia'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { State } from './state'

const state: State = {
  collection: {
    count: 0,
    next: null,
    previous: null,
    people: []
  } as CollectionPeopleType
}

export const StateInterface = state

export const usePeopleStore = defineStore({
  id: 'people',
  state: () => state,
  actions: {
    setCollection (collection: CollectionPeopleType): void {
      this.collection = collection
    }
  },
  getters: {
    havePeople (): boolean {
      return this.collection.people.length > 0
    }
  }
})
