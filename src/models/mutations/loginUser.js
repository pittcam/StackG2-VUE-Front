import gql from 'graphql-tag'

export const LOGIN_USER = gql`
  mutation LoginUser(
    $email: String!
    $password: String!
  ) {
    loginUser(
      email: $email
      password: $password
    ) {
      id
      email
      token
    }
  }
`
