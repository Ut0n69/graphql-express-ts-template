import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql';

export const todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'Todo',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Todo ID.'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Todo title.'
    }
  }
});

export const todoCreateInputType = new GraphQLInputObjectType({
  name: 'todoCreateInputType',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Todo title.'
    }
  }
});

export const todoUpdateInputType = new GraphQLInputObjectType({
  name: 'todoUpdateInputType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Todo ID'
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Todo title.'
    }
  }
});

export const todoDeleteInputType = new GraphQLInputObjectType({
  name: 'todoDeleteInputType',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Todo ID.'
    }
  }
});
