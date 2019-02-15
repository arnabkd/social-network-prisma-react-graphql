import { prisma } from '../generated/prisma-client'

export const MutationResolvers = {
  async createPerson(parent, args, context) {
    console.log(args)
    return await prisma.createPerson({
      name: args.name,
      email: args.email,
      bio: args.bio
    })
  },
  async startConversation(parent, {firstPersonId, secondPersonId}, context) {
    const firstPerson = await prisma.person({id: firstPersonId})
    const secondPerson = await prisma.person({id: secondPersonId})
    const participants = [firstPerson, secondPerson]
    // Add all participants to a group, and start a conversation
    const group = await prisma.createGroup({
      participants: {
        connect: [firstPerson]
      }
    })
  }
}