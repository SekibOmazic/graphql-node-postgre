const department = (sequelize, DataTypes) => {
  const Department = sequelize.define('department', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'A department name can not be empty.',
        },
      },
    },
  })

  Department.associate = models => {
    Department.belongsTo(models.Organization)
    Department.hasMany(models.Employee)
  }

  return Department
}

export default department
