
/*
import { gql } from 'graphql-tag'
import { peopleTransformer } from '../../transformers/PeopleTransformer'
import { CollectionPeopleType } from '../../types/CollectionPeopleType'
import { ResponsePeople } from '../../types/ResponsePeople'

export const PEOPLE_QUERY = gql`
  query {
    allPeople {
      people {
        name
      }
    }
  }
`

export const getCollectionPeople = (): CollectionPeopleType | undefined => {
  const { data } = useQuery<ResponsePeople, ResponsePeople>(PEOPLE_QUERY)
  console.log(data)
  return peopleTransformer(data)
}
*/

export default {
  getCollectionPeople: () => {}
}
