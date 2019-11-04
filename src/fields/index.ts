import { GraphQLObjectType } from 'graphql';
import { todoField } from '@/fields/todo/';
import { memberField } from '@/fields/member/';

export const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query type.',
  fields: {
    ...todoField.query,
    ...memberField.query
  }
});

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    ...todoField.mutation,
    ...memberField.mutation
  }
});
