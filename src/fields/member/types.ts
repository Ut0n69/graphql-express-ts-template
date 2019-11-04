import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql';

export const memberType = new GraphQLObjectType({
  name: 'member',
  description: 'member',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    }
  }
});

export const memberCreateInput = new GraphQLInputObjectType({
  name: 'memberCreateInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    }
  }
});

export const memberUpdateInput = new GraphQLInputObjectType({
  name: 'memberUpdateInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member ID.'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The Member name.'
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The Member age.'
    }
  }
});

export const memberDeleteInput = new GraphQLInputObjectType({
  name: 'memberDeleteInput',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the member.'
    }
  }
});
