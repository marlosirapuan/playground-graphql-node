const Post = require('../../models').post
const User = require('../../models').user

module.exports = {
  Query: {
    async posts () {
      return await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['id', 'name']
          }
        ]
      })
    },
    post: (_, { id }) => Post.findByPk(id)
  },

  Mutation: {
    async createPost (_, { title, content, user_id }) {
      const user = await User.findOne({ where: { id: user_id } })
      const post = await Post.create({ title, content, user_id: user.id })
      return {
        id: post.id,
        title: post.title,
        content: post.content,
        user
      }
    }
  }
}
