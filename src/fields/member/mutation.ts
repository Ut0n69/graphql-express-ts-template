import { GraphQLNonNull, GraphQLList } from 'graphql';
import { createMember, updateMember, deleteMember } from '@/fields/member/resolver';
import { memberType, memberCreateInput, memberUpdateInput, memberDeleteInput } from '@/fields/member/types';

export const memberMutation = {
  createMember: {
    type: new GraphQLList(memberType),
    args: {
      todo: {
        type: new GraphQLNonNull(memberCreateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return createMember(args.todo);
    }
  },
  updateMember: {
    type: new GraphQLList(memberType),
    args: {
      todo: {
        type: new GraphQLNonNull(memberUpdateInput)
      }
    },
    resolve: (_: any, args: any) => {
      return updateMember(args.todo);
    }
  },
  deleteMember: {
    type: new GraphQLList(memberType),
    args: {
      todo: {
        type: new GraphQLNonNull(memberDeleteInput)
      }
    },
    resolve: (_: any, args: any) => {
      return deleteMember(args.todo);
    }
  }
};
