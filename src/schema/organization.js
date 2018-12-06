import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    organizations: [Organization!]
    organization(id: ID!): Organization
  }

  type Organization {
    id: ID!
    name: String!
    # employees: [Employee!]!
    departments: [Department]!
  }
`
