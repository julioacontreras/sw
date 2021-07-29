export interface ItemData {
  id: string;
  name: string;
  height: number;
  mass: number;
  // eslint-disable-next-line camelcase
  hair_color: string;
  // eslint-disable-next-line camelcase
  skin_color: string;
  // eslint-disable-next-line camelcase
  eye_color: string;
  // eslint-disable-next-line camelcase
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [string],
  species: [string],
  vehicles: [string],
  starships: [string],
  created: string;
  edited: string;
  url: string;
}

export interface Data {
  count: number;
  next: string;
  previous: string;
  results: ItemData[];
}

export interface ResponsePeople {
  data: Data;
  status: number;
}
