export default {
  Query: {
    employees: async (parent, { pagination }, { models }) => {
      return await models.Employee.findAll({
        offset: pagination.page,
        limit: pagination.size,
      })
    },
    employee: async (parent, { id }, { models }) => {
      return await models.Employee.findById(id)
    },
    me: async (parent, args, { models, me }) => {
      return await models.Employee.findById(me.id)
    },
  },

  Employee: {
    department: async (employee, args, { models }) => {
      console.log(
        'Employee.department resolver',
        employee.departmentId,
      )
      return await models.Department.findByPk(employee.departmentId)
    },
  },
}
