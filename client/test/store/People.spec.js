import { usePeopleStore } from '@/store/people'
import { setActivePinia, createPinia } from 'pinia'

describe('Store People', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('check is clearSearch works fine', () => {
    const store = usePeopleStore()
    store.collection.peopleFull = [
      { id: 1 }
    ]
    expect(store.collection.people.length).toEqual(0)
    store.clearSearch()
    expect(store.collection.people.length).toEqual(1)
  })

  test('check is searchPeopleByText works fine', () => {
    const store = usePeopleStore()
    store.collection.peopleFull = [
      { name: 'Luke' },
      { name: 'Lounanda' },
      { name: 'R2d2' }
    ]
    store.collection.people = [
      { name: 'Luke' },
      { name: 'Lounanda' },
      { name: 'R2d2' }
    ]
    store.searchPeopleByText('L')
    expect(store.collection.people.length).toEqual(2)
    store.searchPeopleByText('l')
    expect(store.collection.people.length).toEqual(2)
    store.searchPeopleByText('l')
    expect(store.collection.people.length).toEqual(2)
    store.searchPeopleByText('luke')
    expect(store.collection.people.length).toEqual(1)
    store.searchPeopleByText('H')
    expect(store.collection.people.length).toEqual(0)
    store.searchPeopleByText('R2d2')
    expect(store.collection.people.length).toEqual(1)
    store.searchPeopleByText('r')
    expect(store.collection.people.length).toEqual(1)
    store.searchPeopleByText('rl')
    expect(store.collection.people.length).toEqual(0)
    store.searchPeopleByText('')
    expect(store.collection.people.length).toEqual(3)
  })
})
