// Code generated by Prisma (prisma@1.26.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  conversation: (where?: ConversationWhereInput) => Promise<boolean>;
  group: (where?: GroupWhereInput) => Promise<boolean>;
  message: (where?: MessageWhereInput) => Promise<boolean>;
  person: (where?: PersonWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  conversations: (args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Conversation>;
  conversationsConnection: (args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ConversationConnectionPromise;
  groups: (args?: {
    where?: GroupWhereInput;
    orderBy?: GroupOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Group>;
  groupsConnection: (args?: {
    where?: GroupWhereInput;
    orderBy?: GroupOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => GroupConnectionPromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  person: (where: PersonWhereUniqueInput) => PersonPromise;
  persons: (args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Person>;
  personsConnection: (args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PersonConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createConversation: (data: ConversationCreateInput) => ConversationPromise;
  deleteManyConversations: (
    where?: ConversationWhereInput
  ) => BatchPayloadPromise;
  createGroup: (data: GroupCreateInput) => GroupPromise;
  deleteManyGroups: (where?: GroupWhereInput) => BatchPayloadPromise;
  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
  createPerson: (data: PersonCreateInput) => PersonPromise;
  updatePerson: (args: {
    data: PersonUpdateInput;
    where: PersonWhereUniqueInput;
  }) => PersonPromise;
  updateManyPersons: (args: {
    data: PersonUpdateManyMutationInput;
    where?: PersonWhereInput;
  }) => BatchPayloadPromise;
  upsertPerson: (args: {
    where: PersonWhereUniqueInput;
    create: PersonCreateInput;
    update: PersonUpdateInput;
  }) => PersonPromise;
  deletePerson: (where: PersonWhereUniqueInput) => PersonPromise;
  deleteManyPersons: (where?: PersonWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  conversation: (
    where?: ConversationSubscriptionWhereInput
  ) => ConversationSubscriptionPayloadSubscription;
  group: (
    where?: GroupSubscriptionWhereInput
  ) => GroupSubscriptionPayloadSubscription;
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  person: (
    where?: PersonSubscriptionWhereInput
  ) => PersonSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ConversationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PersonOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "bio_ASC"
  | "bio_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MessageOrderByInput =
  | "sentAt_ASC"
  | "sentAt_DESC"
  | "body_ASC"
  | "body_DESC"
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type GroupOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ConversationWhereInput {
  between?: GroupWhereInput;
  messages_every?: MessageWhereInput;
  messages_some?: MessageWhereInput;
  messages_none?: MessageWhereInput;
  AND?: ConversationWhereInput[] | ConversationWhereInput;
  OR?: ConversationWhereInput[] | ConversationWhereInput;
  NOT?: ConversationWhereInput[] | ConversationWhereInput;
}

export interface GroupWhereInput {
  participants_every?: PersonWhereInput;
  participants_some?: PersonWhereInput;
  participants_none?: PersonWhereInput;
  AND?: GroupWhereInput[] | GroupWhereInput;
  OR?: GroupWhereInput[] | GroupWhereInput;
  NOT?: GroupWhereInput[] | GroupWhereInput;
}

export interface PersonWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  inbox_every?: ConversationWhereInput;
  inbox_some?: ConversationWhereInput;
  inbox_none?: ConversationWhereInput;
  bio?: String;
  bio_not?: String;
  bio_in?: String[] | String;
  bio_not_in?: String[] | String;
  bio_lt?: String;
  bio_lte?: String;
  bio_gt?: String;
  bio_gte?: String;
  bio_contains?: String;
  bio_not_contains?: String;
  bio_starts_with?: String;
  bio_not_starts_with?: String;
  bio_ends_with?: String;
  bio_not_ends_with?: String;
  AND?: PersonWhereInput[] | PersonWhereInput;
  OR?: PersonWhereInput[] | PersonWhereInput;
  NOT?: PersonWhereInput[] | PersonWhereInput;
}

export interface MessageWhereInput {
  from?: PersonWhereInput;
  sentAt?: DateTimeInput;
  sentAt_not?: DateTimeInput;
  sentAt_in?: DateTimeInput[] | DateTimeInput;
  sentAt_not_in?: DateTimeInput[] | DateTimeInput;
  sentAt_lt?: DateTimeInput;
  sentAt_lte?: DateTimeInput;
  sentAt_gt?: DateTimeInput;
  sentAt_gte?: DateTimeInput;
  body?: String;
  body_not?: String;
  body_in?: String[] | String;
  body_not_in?: String[] | String;
  body_lt?: String;
  body_lte?: String;
  body_gt?: String;
  body_gte?: String;
  body_contains?: String;
  body_not_contains?: String;
  body_starts_with?: String;
  body_not_starts_with?: String;
  body_ends_with?: String;
  body_not_ends_with?: String;
  AND?: MessageWhereInput[] | MessageWhereInput;
  OR?: MessageWhereInput[] | MessageWhereInput;
  NOT?: MessageWhereInput[] | MessageWhereInput;
}

export type PersonWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ConversationCreateInput {
  between: GroupCreateOneInput;
  messages?: MessageCreateManyInput;
}

export interface GroupCreateOneInput {
  create?: GroupCreateInput;
}

export interface GroupCreateInput {
  participants?: PersonCreateManyInput;
}

export interface PersonCreateManyInput {
  create?: PersonCreateInput[] | PersonCreateInput;
  connect?: PersonWhereUniqueInput[] | PersonWhereUniqueInput;
}

export interface PersonCreateInput {
  name: String;
  email: String;
  inbox?: ConversationCreateManyInput;
  bio?: String;
}

export interface ConversationCreateManyInput {
  create?: ConversationCreateInput[] | ConversationCreateInput;
}

export interface MessageCreateManyInput {
  create?: MessageCreateInput[] | MessageCreateInput;
}

export interface MessageCreateInput {
  from: PersonCreateOneInput;
  sentAt: DateTimeInput;
  body: String;
}

export interface PersonCreateOneInput {
  create?: PersonCreateInput;
  connect?: PersonWhereUniqueInput;
}

export interface MessageUpdateManyMutationInput {
  sentAt?: DateTimeInput;
  body?: String;
}

export interface PersonUpdateInput {
  name?: String;
  email?: String;
  inbox?: ConversationUpdateManyInput;
  bio?: String;
}

export interface ConversationUpdateManyInput {
  create?: ConversationCreateInput[] | ConversationCreateInput;
}

export interface PersonUpdateManyMutationInput {
  name?: String;
  email?: String;
  bio?: String;
}

export interface ConversationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ConversationWhereInput;
  AND?:
    | ConversationSubscriptionWhereInput[]
    | ConversationSubscriptionWhereInput;
  OR?:
    | ConversationSubscriptionWhereInput[]
    | ConversationSubscriptionWhereInput;
  NOT?:
    | ConversationSubscriptionWhereInput[]
    | ConversationSubscriptionWhereInput;
}

export interface GroupSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: GroupWhereInput;
  AND?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
  OR?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
  NOT?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: MessageWhereInput;
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput;
}

export interface PersonSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PersonWhereInput;
  AND?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
  OR?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
  NOT?: PersonSubscriptionWhereInput[] | PersonSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Conversation {}

export interface ConversationPromise
  extends Promise<Conversation>,
    Fragmentable {
  between: <T = GroupPromise>() => T;
  messages: <T = FragmentableArray<Message>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface ConversationSubscription
  extends Promise<AsyncIterator<Conversation>>,
    Fragmentable {
  between: <T = GroupSubscription>() => T;
  messages: <T = Promise<AsyncIterator<MessageSubscription>>>(args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Group {}

export interface GroupPromise extends Promise<Group>, Fragmentable {
  participants: <T = FragmentableArray<Person>>(args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface GroupSubscription
  extends Promise<AsyncIterator<Group>>,
    Fragmentable {
  participants: <T = Promise<AsyncIterator<PersonSubscription>>>(args?: {
    where?: PersonWhereInput;
    orderBy?: PersonOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface Person {
  id: ID_Output;
  name: String;
  email: String;
  bio?: String;
}

export interface PersonPromise extends Promise<Person>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  inbox: <T = FragmentableArray<Conversation>>(args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  bio: () => Promise<String>;
}

export interface PersonSubscription
  extends Promise<AsyncIterator<Person>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  inbox: <T = Promise<AsyncIterator<ConversationSubscription>>>(args?: {
    where?: ConversationWhereInput;
    orderBy?: ConversationOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  bio: () => Promise<AsyncIterator<String>>;
}

export interface Message {
  sentAt: DateTimeOutput;
  body: String;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  from: <T = PersonPromise>() => T;
  sentAt: () => Promise<DateTimeOutput>;
  body: () => Promise<String>;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  from: <T = PersonSubscription>() => T;
  sentAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface ConversationConnection {}

export interface ConversationConnectionPromise
  extends Promise<ConversationConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ConversationEdge>>() => T;
  aggregate: <T = AggregateConversationPromise>() => T;
}

export interface ConversationConnectionSubscription
  extends Promise<AsyncIterator<ConversationConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ConversationEdgeSubscription>>>() => T;
  aggregate: <T = AggregateConversationSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ConversationEdge {
  node: Conversation;
  cursor: String;
}

export interface ConversationEdgePromise
  extends Promise<ConversationEdge>,
    Fragmentable {
  node: <T = ConversationPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ConversationEdgeSubscription
  extends Promise<AsyncIterator<ConversationEdge>>,
    Fragmentable {
  node: <T = ConversationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateConversation {
  count: Int;
}

export interface AggregateConversationPromise
  extends Promise<AggregateConversation>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateConversationSubscription
  extends Promise<AsyncIterator<AggregateConversation>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface GroupConnection {}

export interface GroupConnectionPromise
  extends Promise<GroupConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<GroupEdge>>() => T;
  aggregate: <T = AggregateGroupPromise>() => T;
}

export interface GroupConnectionSubscription
  extends Promise<AsyncIterator<GroupConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<GroupEdgeSubscription>>>() => T;
  aggregate: <T = AggregateGroupSubscription>() => T;
}

export interface GroupEdge {
  node: Group;
  cursor: String;
}

export interface GroupEdgePromise extends Promise<GroupEdge>, Fragmentable {
  node: <T = GroupPromise>() => T;
  cursor: () => Promise<String>;
}

export interface GroupEdgeSubscription
  extends Promise<AsyncIterator<GroupEdge>>,
    Fragmentable {
  node: <T = GroupSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateGroup {
  count: Int;
}

export interface AggregateGroupPromise
  extends Promise<AggregateGroup>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateGroupSubscription
  extends Promise<AsyncIterator<AggregateGroup>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PersonConnection {
  pageInfo: PageInfo;
  edges: PersonEdge[];
}

export interface PersonConnectionPromise
  extends Promise<PersonConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PersonEdge>>() => T;
  aggregate: <T = AggregatePersonPromise>() => T;
}

export interface PersonConnectionSubscription
  extends Promise<AsyncIterator<PersonConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PersonEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePersonSubscription>() => T;
}

export interface PersonEdge {
  node: Person;
  cursor: String;
}

export interface PersonEdgePromise extends Promise<PersonEdge>, Fragmentable {
  node: <T = PersonPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PersonEdgeSubscription
  extends Promise<AsyncIterator<PersonEdge>>,
    Fragmentable {
  node: <T = PersonSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePerson {
  count: Int;
}

export interface AggregatePersonPromise
  extends Promise<AggregatePerson>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePersonSubscription
  extends Promise<AsyncIterator<AggregatePerson>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ConversationSubscriptionPayload {
  mutation: MutationType;
  node: Conversation;
  updatedFields: String[];
}

export interface ConversationSubscriptionPayloadPromise
  extends Promise<ConversationSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ConversationPromise>() => T;
  updatedFields: () => Promise<String[]>;
}

export interface ConversationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ConversationSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ConversationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
}

export interface GroupSubscriptionPayload {
  mutation: MutationType;
  node: Group;
  updatedFields: String[];
}

export interface GroupSubscriptionPayloadPromise
  extends Promise<GroupSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = GroupPromise>() => T;
  updatedFields: () => Promise<String[]>;
}

export interface GroupSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<GroupSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = GroupSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface MessagePreviousValues {
  sentAt: DateTimeOutput;
  body: String;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  sentAt: () => Promise<DateTimeOutput>;
  body: () => Promise<String>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  sentAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  body: () => Promise<AsyncIterator<String>>;
}

export interface PersonSubscriptionPayload {
  mutation: MutationType;
  node: Person;
  updatedFields: String[];
  previousValues: PersonPreviousValues;
}

export interface PersonSubscriptionPayloadPromise
  extends Promise<PersonSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PersonPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PersonPreviousValuesPromise>() => T;
}

export interface PersonSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PersonSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PersonSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PersonPreviousValuesSubscription>() => T;
}

export interface PersonPreviousValues {
  id: ID_Output;
  name: String;
  email: String;
  bio?: String;
}

export interface PersonPreviousValuesPromise
  extends Promise<PersonPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  bio: () => Promise<String>;
}

export interface PersonPreviousValuesSubscription
  extends Promise<AsyncIterator<PersonPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  bio: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Conversation",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Person",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
