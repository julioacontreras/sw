import { PeopleType } from './PeopleType'

export interface CollectionPeopleType {
  count: number;
  next: string | null;
  previous: string | null;
  hasNext: boolean;
  hasPrevious: boolean;
  people: PeopleType[];
}
