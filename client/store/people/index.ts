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
  refetch: null,
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
  id: 'people',
  state: () => state,
  actions: {
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
