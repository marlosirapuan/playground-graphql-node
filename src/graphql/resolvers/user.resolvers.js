const User = require('../../models').user

module.exports = {
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findByPk(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
}
