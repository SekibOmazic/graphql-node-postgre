import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    departments(organizationId: ID!): [Department!]
    department(id: ID!): Department
  }

  extend type Mutation {
    createDepartment(organizationId: ID!, name: String!): Department!
    deleteDepartment(id: ID!): Boolean!
    updateDepartment(id: ID!, name: String!): Department!
  }

  type Department {
    id: ID!
    name: String!
    organization: Organization!
    employees: [Employee!]
  }
`
