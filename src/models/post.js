'use strict'
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  })
  Post.associate = function (models) {
    Post.belongsTo(models.user, { foreignKey: 'user_id' })
  }
  return Post
}
