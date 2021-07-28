import { PeopleType } from '../types/PeopleType'
import { CollectionPeopleType } from '../types/CollectionPeopleType'
import { ResponsePeople, ItemData } from '../types/ResponsePeople'

export function peopleTransformer (response: ResponsePeople | undefined): CollectionPeopleType | undefined {
  const list: PeopleType[] = []
  if (!response) {
    return undefined
  }
  for (const itemResponse of response.data.results) {
    list.push(getPerson(itemResponse))
  }
  return {
    count: response.data.count,
    next: response.data.next,
    previous: response.data.previous,
    results: list
  }
}

export function getPerson (itemData: ItemData): PeopleType {
  return {
    name: String(itemData.name),
    height: itemData.height,
    mass: itemData.mass,
    hairColor: String(itemData.hair_color),
    skinColor: String(itemData.skin_color),
    eyeColor: String(itemData.eye_color),
    birthYear: String(itemData.birth_year),
    gender: String(itemData.gender),
    homeworld: String(itemData.homeworld),
    films: itemData.films,
    species: itemData.species,
    vehicles: itemData.vehicles,
    starships: itemData.starships,
    created: String(itemData.created),
    edited: String(itemData.edited),
    url: String(itemData.url)
  }
}
