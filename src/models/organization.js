const organization = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  })

  Organization.associate = models => {
    Organization.hasMany(models.Department, { onDelete: 'CASCADE' })
  }

  return Organization
}

export default organization
