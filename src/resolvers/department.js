export default {
  Query: {
    departments: async (parent, { organizationId }, { models }) => {
      return await models.Department.findAll({
        where: {
          organizationId: organizationId,
        },
      })
    },
    department: async (parent, { id }, { models }) => {
      return await models.Department.findByPk(id)
    },
  },
  Mutation: {
    createDepartment: async (
      parent,
      { organizationId, name },
      { me, models },
    ) => {
      return await models.Department.create({
        name,
        organizationId: organizationId,
      })
    },

    deleteDepartment: async (parent, { id }, { models }) => {
      return await models.Department.destroy({ where: { id } })
    },

    updateDepartment: async (parent, { id, name }, { models }) => {
      return await models.Department.update(
        { name },
        {
          returning: true, // only with PostgreSQL
          where: { id },
        },
      ).then(([rowsUpdated, [updatedDepartment]]) => {
        return updatedDepartment
      })
    },
  },

  Department: {
    employees: async (department, args, { models }) => {
      return await models.Employee.findAll({
        where: {
          departmentId: department.id,
        },
      })
    },
    organization: async (department, args, { models }) => {
      return await models.Organization.findByPk(
        department.organizationId,
      )
    },
  },
}
