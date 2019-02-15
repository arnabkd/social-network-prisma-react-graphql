import {prisma} from '../generated/prisma-client'

export const QueryResolvers = {
  async personsConnection(parent, args, context, info) {
    return await prisma.personsConnection(args)
  },
}