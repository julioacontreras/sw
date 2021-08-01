import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { PeopleType } from '../../types/PeopleType'

export interface PersonImage {
  id: string;
  small: string;
  big: string;
}

// define State
export interface State {
  isLoad: boolean;
  executeWhenIsReadyToUse: any;
  perPageDefault: number;
  images: PersonImage[];
  collection: CollectionPeopleType;
  refetch: any;
  personSelected: PeopleType | null;
}
