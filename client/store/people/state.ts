import { CollectionPeopleType } from '../../types/CollectionPeopleType'

export interface PersonImage {
  id: string;
  image: string;
}

// define State
export interface State {
  images: PersonImage[];
  collection: CollectionPeopleType;
  refetch: any;
}
