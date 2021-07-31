import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { PeopleType } from '../../types/PeopleType'

export interface PersonImage {
  id: string;
  image: string;
}

// define State
export interface State {
  perPageDefault: number,
  images: PersonImage[];
  collection: CollectionPeopleType;
  refetch: any;
  personSelected: PeopleType | null;
}
