import { gql } from 'apollo-server-express'

import employeeSchema from './employee'
import departmentSchema from './department'
import organizationShema from './organization'

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema,
  organizationShema,
  departmentSchema,
  employeeSchema,
]
