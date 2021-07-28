import { PeopleType } from './PeopleType'

export interface CollectionPeopleType {
  count: number,
  next: string | null,
  previous: string | null,
  results: PeopleType[]
}
