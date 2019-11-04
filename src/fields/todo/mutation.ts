import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createTodo, updateTodo, deleteTodo } from '@/fields/todo/resolver';
import { todoType, todoCreateInputType, todoUpdateInputType, todoDeleteInputType } from '@/fields/todo/types';

export const todoMutation = {
  createTodo: {
    type: new GraphQLList(todoType),
    args: {
      todo: {
        type: new GraphQLNonNull(todoCreateInputType)
      }
    },
    resolve: (_: any, args: any) => {
      return createTodo(args.todo);
    }
  },
  updateTodo: {
    type: new GraphQLList(todoType),
    args: {
      todo: {
        type: new GraphQLNonNull(todoUpdateInputType)
      }
    },
    resolve: (_: any, args: any) => {
      return updateTodo(args.todo);
    }
  },
  deleteTodo: {
    type: new GraphQLList(todoType),
    args: {
      todo: {
        type: new GraphQLNonNull(todoDeleteInputType)
      }
    },
    resolve: (_: any, args: any) => {
      return deleteTodo(args.todo);
    }
  }
};
