import { AddUserInput, Resolvers, User } from '__generated__/graphql';

const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'admin',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'user',
  },
];

const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello All!',
    users: () => users,
    hi: () => 'Hi All!',
    firstUser: () => users[0],
  },
  Mutation: {
    addUser: (_parent: unknown, { input }: { input: AddUserInput }): User => {
      const id = String(users.length + 1);
      const user = { id, ...input };
      users.push(user);
      return user;
    },
  },
};

export default resolvers;
