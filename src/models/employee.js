const employee = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employee', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  })

  Employee.associate = models => {
    Employee.belongsTo(models.Department)
  }

  Employee.findByFirstName = async login => {
    let employee = await Employee.findOne({
      where: { firstName: login },
    })

    if (!employee) {
      employee = await Employee.findOne({
        where: { lastName: login },
      })
    }

    return employee
  }

  return Employee
}

export default employee
