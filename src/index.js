import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'

import schema from './schema'
import resolvers from './resolvers'
import models, { sequelize } from './models'

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: error => {
    // remove the internal sequelize error message
    // leave only the important validation error
    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '')

    // Or, you can delete the exception information
    // delete error.extensions.exception;

    return {
      ...error,
      message,
    }
  },
  context: async () => ({
    models,
    // just for test.
    me: await models.Employee.findByFirstName('Leanne'),
  }),
})

server.applyMiddleware({ app, path: '/graphql' })

const eraseDatabaseOnSync = true

app.use(cors())

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createPersonae()
  }

  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql')
  })
})
const createPersonae = async () => {
  await models.Organization.create(
    {
      name: 'Magic Company Ltd.',
      departments: [
        {
          name: 'Dept-1',
        },
        {
          name: 'Dept-2',
        },
        {
          name: 'Dept-3',
        },
      ],
    },
    {
      include: [models.Department],
    },
  )

  await models.Employee.create(
    {
      firstName: 'Leanne',
      lastName: 'Graham',
      title: 'Chief GraphQL Officer',
      role: 'Guru',
      departmentId: 1,
    },
    {
      include: [models.Department],
    },
  )
  await models.Employee.create(
    {
      firstName: 'Ervin',
      lastName: 'Howell',
      title: 'Ultra Manager',
      role: 'Assistant to the Guru',
      departmentId: 1,
    },
    {
      include: [models.Department],
    },
  )
  await models.Employee.create(
    {
      firstName: 'Clementine',
      lastName: 'Bauch',
      title: 'Senior Accountant',
      role: 'Wannabe Manager',
      departmentId: 2,
    },
    {
      include: [models.Department],
    },
  )
  await models.Employee.create(
    {
      firstName: 'Patricia',
      lastName: 'Lebsack',
      title: 'Sales Magician',
      role: 'Coworking space manager',
      departmentId: 2,
    },
    {
      include: [models.Department],
    },
  )

  await models.Employee.create(
    {
      firstName: 'Chelsey',
      lastName: 'Dietrich',
      title: 'Data Cruncher',
      role: 'Data Scientist',
      departmentId: 3,
    },
    {
      include: [models.Department],
    },
  )
  await models.Employee.create(
    {
      firstName: 'Max',
      lastName: 'Johnstone',
      title: 'Database Administrator',
      role: 'SQL lover',
      departmentId: 3,
    },
    {
      include: [models.Department],
    },
  )
}
