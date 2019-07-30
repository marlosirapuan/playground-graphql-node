'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  )
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
