import { GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import { getTodoList, getTodoById } from '@/fields/todo/resolver';
import { todoType } from '@/fields/todo/types';

export const todoQuery = {
  todoList: {
    type: new GraphQLList(todoType),
    resolve: getTodoList
  },
  todo: {
    type: todoType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        description: 'The Todo ID.'
      }
    },
    resolve: (_: any, args: any) => {
      return getTodoById(Number(args.id));
    }
  }
};
