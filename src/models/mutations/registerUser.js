import gql from 'graphql-tag'

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $password: String!
    $username: String!
    $name: String!
  ) {
    registerUser(
      email: $email
      password: $password
      username: $username
      name: $name
    ) {
      id
      email
      token
    }
  }
`
