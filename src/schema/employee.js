import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    employees(pagination: Pagination!): [Employee]
    employee(id: ID!): Employee
    me: Employee
  }

  type Employee {
    id: ID!
    firstName: String!
    lastName: String!
    title: String!
    role: String

    # subordinates: [Employee!]
    # organization: Organization!
    department: Department
  }

  input Pagination {
    page: Int!
    size: Int!
  }
`
