const { fileLoader, mergeTypes } = require('merge-graphql-schemas')
const path = require('path')

const typesArray = fileLoader(path.join(__dirname, './'))
const typesMerged = mergeTypes(typesArray)

module.exports = typesMerged
