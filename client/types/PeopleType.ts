export interface PeopleType {
  imageSmall: string,
  imageBig: string,
  id: string;
  name: string;
  height: number;
  mass: number;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
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
