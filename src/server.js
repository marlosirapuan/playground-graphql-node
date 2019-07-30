const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

const opts = {
  port: 4004
}

server.start(opts, () =>
  console.log(`🍻 Server running at http://localhost:${opts.port}`)
)
