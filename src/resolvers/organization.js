export default {
  Query: {
    organizations: async (parent, args, { models }) => {
      return await models.Organization.findAll()
    },
    organization: async (parent, { id }, { models }) => {
      return await models.Organization.findById(id)
    },
  },

  Organization: {
    departments: async (organization, args, { models }) => {
      return await models.Department.findAll({
        where: {
          organizationId: organization.id,
        },
      })
    },
  },
}
