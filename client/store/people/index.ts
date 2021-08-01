import { useQuery } from '@vue/apollo-composable'
import { DocumentNode } from 'graphql'

import { defineStore } from 'pinia'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { PeopleType } from '../../types/PeopleType'
import { State, PersonImage } from './state'
import images from '~/static/assets/data/images.json'

import Log from '~/plugins/log'

interface AllPeopleType {
  allPeople: {
    totalCount: number;
    pageInfo: {
      startCursor: string;
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    },
    people: []
    peopleFull: []
  }
}

const state: State = {
  isLoad: false,
  executeWhenIsReadyToUse: null,
  refetch: null,
  perPageDefault: 12,
  personSelected: null,
  images,
  collection: {
    count: 0,
    next: null,
    previous: null,
    people: [],
    peopleFull: [],
    hasNext: false,
    hasPrevious: false
  } as CollectionPeopleType
}

export interface ParamsLoadPeople {
  first?: number;
  before?: string;
  last?: number;
  after?: string;
}

export const StateInterface = state

export const usePeopleStore = defineStore({
  id: 'people', // internal name store
  state: () => state,
  actions: {
    clearSearch (): void {
      this.collection.people = Object.assign([], this.collection.peopleFull)
    },
    searchPeopleByText (text: string): void {
      this.clearSearch()
      const result: PeopleType[] = []
      const peopleFull = this.collection.peopleFull
      for (const person of peopleFull) {
        const searchText = text.toLocaleLowerCase()
        if (person.name.toLocaleLowerCase().includes(searchText)) {
          result.push(person)
        }
      }
      this.collection.people = result
    },
    refetchPersonSelected (id: string): void {
      const people = this.collection.people
      let result: PeopleType | null = null
      for (const person of people) {
        if (person.id === id) {
          result = person
        }
      }
      if (result) {
        this.setPersonSelected(result)
      }
    },
    isReadyToUse () {
      if (this.executeWhenIsReadyToUse) {
        this.executeWhenIsReadyToUse()
      }
    },
    setPersonSelected (person: PeopleType) {
      this.personSelected = Object.assign({}, person)
    },
    loadPeople (settings: ParamsLoadPeople, gql: DocumentNode) {
      return new Promise((resolve, reject) => {
        try {
          const { onResult, onError, refetch } = useQuery<AllPeopleType, any>(gql, {
            first: settings.first,
            before: settings.before,
            last: settings.last,
            after: settings.after
          })
          onError((error) => {
            Log.error(error)
            reject(error)
          })
          onResult((query) => {
            this.refetch = refetch
            const data = query.data as AllPeopleType
            this.setCollection({
              count: data.allPeople.totalCount,
              next: data.allPeople.pageInfo.endCursor,
              previous: data.allPeople.pageInfo.startCursor,
              hasNext: data.allPeople.pageInfo.hasNextPage,
              hasPrevious: data.allPeople.pageInfo.hasPreviousPage,
              people: data.allPeople.people,
              peopleFull: Object.assign([], data.allPeople.people)
            })
            if (this.collection.people.length > 0) {
              this.setPersonSelected(this.collection.people[0])
            }
            this.isLoad = true
            this.isReadyToUse()
            resolve(true)
          })
        } catch (error) {
          Log.error(error)
          reject(error)
        }
      })
    },
    refetchPeople (settings: ParamsLoadPeople) {
      if (this.refetch) {
        this.refetch({
          first: settings.first,
          before: settings.before,
          last: settings.last,
          after: settings.after
        })
      }
    },
    setCollection (collection: CollectionPeopleType): void {
      collection.people.map((person: PeopleType) => {
        let small: string = ''
        let big: string = ''
        this.images.forEach((elImage: PersonImage) => {
          if (elImage.id === person.id) {
            small = elImage.small
            big = elImage.big
          }
        })
        if (small) {
          person.imageSmall = small
        }
        if (big) {
          person.imageBig = big
        }
        return person
      })
      this.collection = collection
    }
  },
  getters: {
    havePeople (): boolean {
      return this.collection.people.length > 0
    }
  }
})
