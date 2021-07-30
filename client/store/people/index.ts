import { useQuery } from '@vue/apollo-composable'

import { defineStore } from 'pinia'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { PeopleType } from '../../types/PeopleType'
import { State, PersonImage } from './state'
import ALL_PEOPLE_GQL from '~/apollo/queries/allPeople.gql'

interface AllPeopleType {
  allPeople: {
    people: []
  }
}

const state: State = {
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
    people: []
  } as CollectionPeopleType
}

export const StateInterface = state

export const usePeopleStore = defineStore({
  id: 'people',
  state: () => state,
  actions: {
    loadPeople (first: number, nextCursor?: string) {
      const { result } = useQuery<AllPeopleType, any>(ALL_PEOPLE_GQL, {
        first,
        after: nextCursor
      })
      setTimeout(() => {
        const data = result.value as AllPeopleType
        this.setCollection({
          count: 0,
          next: null,
          previous: null,
          people: data.allPeople.people
        })
      }, 1000)
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
