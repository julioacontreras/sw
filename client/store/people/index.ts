import { useQuery } from '@vue/apollo-composable'

import { defineStore } from 'pinia'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { PeopleType } from '../../types/PeopleType'
import { State, PersonImage } from './state'
import ALL_PEOPLE_GQL from '~/apollo/queries/allPeople.gql'

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
  }
}

const state: State = {
  isLoad: false,
  executeWhenIsReadyToUse: null,
  refetch: null,
  perPageDefault: 12,
  personSelected: null,
  images: [
    {
      id: 'cGVvcGxlOjE=',
      image: '/assets/img/people/person.3.png'
    },
    {
      id: 'cGVvcGxlOjM=',
      image: '/assets/img/people/person.1.png'
    },
    {
      id: 'cGVvcGxlOjQ=',
      image: '/assets/img/people/person.2.png'
    }
  ],
  collection: {
    count: 0,
    next: null,
    previous: null,
    people: [],
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
      this.personSelected = person
    },
    loadPeople (settings: ParamsLoadPeople) {
      return new Promise((resolve, reject) => {
        try {
          const { onResult, onError, refetch } = useQuery<AllPeopleType, any>(ALL_PEOPLE_GQL, {
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
              people: data.allPeople.people
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
        let image: string = ''
        this.images.forEach((elImage: PersonImage) => {
          if (elImage.id === person.id) {
            image = elImage.image
          }
        })
        if (image) {
          person.image = image
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
