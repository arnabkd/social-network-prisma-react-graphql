import { prisma } from '../generated/prisma-client'
import { ApolloServer, gql} from 'apollo-server'
import { QueryResolvers } from './queryresolvers'
import { MutationResolvers } from './mutationresolvers'

import * as fs from 'fs'
import * as path from 'path'

const typeDefs = fs.readFileSync(path.join(__dirname, './schema.graphql'), 'utf-8')

const resolvers = {
  Query: QueryResolvers,
  Mutation: MutationResolvers
}

const server = new ApolloServer({
  typeDefs: gql`${typeDefs}`,
  resolvers,
  context: {
    prisma
  },
})

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
